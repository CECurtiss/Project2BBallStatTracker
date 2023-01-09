const router = require('express').Router();
const PlayerStats = require('../../models/playerstats');

router.get('/', async (req,res) => {
    try {
        const allPlayerStats = await PlayerStats.findAll()
        res.status(200).json(allPlayerStats)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const gamePlayers = await PlayerStats.findAll({
            where: {
                gameId: req.params.id,
            }
        })
        const allGamePlayers = gamePlayers.map((aGPlayers) => aGPlayers.get({ plain: true }))
 
    res.render('playerstats', { allGamePlayers })

      
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newPlayer = await PlayerStats.create({
         ...req.body,
        });

        res.status(200).json(newPlayer);
      } catch (err) {
        res.status(400).json(err);
      }
    });

router.delete('/:id', async (req, res) => {
    try {
        const playerData = await PlayerStats.destroy({
            where: {
             id: req.params.id,
            },
        });

        if (!playerData) {
            res.status(404).json({ message: 'Player not found'});
            return;
        }
        
        res.status(200).json(playerData);
    }    catch (err) {
        res.status(500).json(err);
    }
    });

    module.exports = router;
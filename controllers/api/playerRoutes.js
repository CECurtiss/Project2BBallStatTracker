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

router.post('/', async (req, res) => {
    try {
        const newPlayer = await PlayerStats.create({
         ...req.body,
         user_id: req.session.user_id,
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
             user_id: req.session.user_id,
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
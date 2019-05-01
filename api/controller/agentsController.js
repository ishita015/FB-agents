const User = require('../model/agentsModel');

exports.addUser = async (req, res) => {
    console.log('init');
    const user = new User({
        text: req.body.text,
        link: req.body.link,
        image: req.body.image,
      
    });
    try {
        const result = await user.save();
        res.status(201).json({
            msg: "Added successfully",
            body: result,
            success: true
        })

    }
    catch (err) {
        res.status(400).json({
            msg: "Backend Error",
            body: err,
            success: false
        })
    }
}





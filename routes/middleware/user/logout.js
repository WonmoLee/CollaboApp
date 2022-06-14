/**
 * Author: wonmoLee 
 * Date: 2022.06.11
 * GitHub: https://github.com/wonmoLee
 * Blog: https://wonmolee.github.io
 * 
 * - Revision history -
 * 
 */

exports.validateParameter = ((req, res, next)=>{
    const {id} = req.body;
    if(!id){
        const error = new Error("Bad request");
        error.status = 400;
        return next(error);
    }
    next();
});

exports.tokenDelete = ((req, res, next)=>{
    const {id} = req.body;
    User.findOneAndUpdate({id: id}, {token: ""}, (err, user) => {
        if (err) return res.json({ success: false, err });
            res.clearCookie("x-access-token");
            return res.status(200).send({success: true}
        );
    });
});

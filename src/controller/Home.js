const homePage = async (req,res)=>{
    try{
        res.status(200).send(`
        <div> Welcome </div> 
        `);
    } catch (error) {
        res.status(500).send({
          comment: "Internal Server Error",
        });
      }
    };
export default {
      homePage,
    };

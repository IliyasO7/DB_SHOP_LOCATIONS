const Shop = require('../models/shop');

const Product = require('../models/products');


exports.getAll = async (req,res,next)=>{
    console.log('isndie all');
    const{title}= req.body;

    try{
        console.log(title);

        if(!title){
          
                res.status(404).json({message:"no title entered"})
  
        }

        const prods=[];
        let data = await Product.findAll({where:{title}})

        for(var i=0;i<data.length;i++){
            prods.push(data[i])
        }
        console.log('+++++++');
     //   console.log(prods[0].shopId);

        var shopArr = [];
        for(var i =0;i<prods.length;i++){
       
            shopArr[i]= prods[i].shopId
        }

        console.log(shopArr);

        var getlocation = [];
        for(var i =0;i<shopArr.length;i++){
            let shopId = shopArr[i]
            let data = await Shop.findAll({where:{id:shopId}})
            console.log(data);
            getlocation.push(data)
            //console.log(data);
        }
        console.log('>>>>>>>>.');
        console.log(getlocation);

        res.status(201).json({ data:getlocation,message:'retireved products'})

      //  let data = await Shop.findAll({where:{id:}})


      /*  prods.forEach(product=>{
            let shopId =  product.shopId
            console.log('??????????');
            console.log(shopId);
             Shop.findAll({where:{id:shopId}}).then((response)=>{
                console.log('2222');
                console.log(response);
                
                //return res.status(201).json({ data:response,message:'retireved products'})
            })

        })*/

        

       

       // console.log(prods);
        
       // res.status(201).json({ data:data,message:'retireved products'})
    }
    catch(error){
        return res.status(500).json(error)
    }
}

exports.shopController = async (req,res,next)=>{
    console.log('shop controller');
}



exports.addProductsToShop = async(req,res,next)=>{
    console.log('inside adding products');

    const{title,description,price,shopId}= req.body

    let userId = req.user.id;
    console.log(userId);
    console.log(shopId);
    try{

        if(!title){
            res.status(404).json({message:"no title entered"})
        }

        let data = await Product.create({title,description,price,userId,shopId})
        console.log(data);

        res.status(201).json({ message:'successfully created new group'})

        console.log(data);


    }
    catch(error){
        return res.status(500).json(error)
    }


}

exports.addShop = async(req,res,next)=>{
    console.log('inside add shop');
    const {grp1,grp2,grp3,grp4} = req.body;

    try{
        
        if(!grp1){
            res.status(404).json({message:"no name entered"})
        }
        let data = await Shop.create({shopId:grp4,shopName:grp1,lon:grp2,lat:grp3})
        res.status(201).json({ message:'successfully created new group'})

    }
    catch(error){
        return res.status(500).json(error)

    }

}

exports.getShops = async(req,res,next)=>{
    console.log('inside get shops');


    try{
        let shops = await Shop.findAll();
        const data=[]
        for(let i=0;i<shops.length;i++){
            data.push(shops[i]);
        }

        console.log(data);
        if(!data){
            res.status(404).json({message:"no data found"})
        }
        res.status(200).json({data , message:"found groups"})

    }

    catch(error){
        res.status(500).json(error)
    }

}

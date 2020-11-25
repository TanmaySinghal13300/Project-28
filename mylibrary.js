function detectollisition(lstone1,lmango1){
    lstone=lstone1.body.position;
    lmango=lmango1.body.position;

   
    if(lstone.x-lmango.x < (lstone1.width+lmango1.width)/2 && 
       lmango.x-lstone.x < (lstone1.width+lmango1.width)/2 && 
       lstone.y-lmango.y < (lstone1.height+lmango1.height)/2 && 
       lmango.y-lstone.y < (lstone1.height+lmango1.height)/2 ){
        Matter.Body.setStatic(lmango1.body,false);
    }
}
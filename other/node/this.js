/**
 * Created by wangqi on 2017/4/10.
 */
var words="hhhh";
var pet={
    words:'...',
    speak:function(name){
        console.log("speak:"+this.words);
    },
    say:()=>{
        console.log("say:"+this.words);
    }
}

function pets() {
    this.words="pets"
    console.log(this);
    console.log("pets:"+this.words);
}
pet.speak();
pet.say();
pets();
console.log("words:"+words);

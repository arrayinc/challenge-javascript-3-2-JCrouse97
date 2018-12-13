// *** YOUR ANSWER BELOW ***

function KnickKnack(x){
  let a = ["thumb", "shoe", "knee", "door", "hive", "sticks", "heaven", "plate", "spine", "shin"];
  let versus = "";
  for(let i = 1; i <= x; i++){
    if(i === 7){
    versus += `This old man, he played ${i}, he played knick-knack up to ` + a[i-1] + ", with a knick knack patty whack, give a dog a bone, This old man went rolling home! - ";
    }else
    versus += `This old man, he played ${i}, he played knick-knack on my ` + a[i-1] + ", with a knick knack patty whack, give a dog a bone, This old man went rolling home! - ";

  }
  return versus;
}

KnickKnack(10)

let fieldIndex = lines[0].split(' ').map(Number);
    // 高さ、幅の最大値
  
    let box = 0;
    // 計算格納箱
    
    let Hnumber = 1;
    let Wnumber = 0;
    // 計算用インデックス
    
    let Hline =3; 
    // 高さの３区切り
    
    let Wline =2;
     // 幅の３区切り
   
  　//   高さの計算（最大値まで）
    while(Hline<=fieldIndex[0]){
  
　　//   横の計算（最大値まで）
     while(Wline<=fieldIndex[1]){
    
    
    // 高さの計算（３つ）
      while(Hnumber<=Hline){
        let check = lines[Hnumber].split(' ').map(Number);
        
        // 横の計算（３つ）
        while(Wnumber<=Wline){
        box += check[Wnumber];
        Wnumber++;
        }
        
       // 初期位置に戻り、高さのみ追加
      Wnumber -=3;
      Hnumber++;
      }
    
       // ３×３の平均値出力
      console.log(Math.trunc(box/9));
   
   　// 次の３×３へ移動（横へ）
      box=0;
      Hnumber -=3;
      Wnumber +=3;
      Wline +=3;
      
      }
      // 次の３×３へ移動（縦へ）
     box=0;
     Hnumber+=3;
     Wnumber=0;
     Wline=2;
     Hline+=3;
     }

//

function setup() {
    createCanvas(500, 500);   
}

function draw() {
    background('lightgrey');
    
    
    text("송편", 50, 100);  
    rect(50,  100, 50*3, 50);  // 너비 길이 방법으로 수정 
    

    text("인절미", 50, 200); 
    rect(50,  200, 50, 50);
    

    text("팥시루떡", 50, 300);
    rect(50, 300, 50*3, 50); 
    

    text("감자떡", 50, 400);
    rect(50, 400, 50*4, 50); // 너비 길이 방법으로 추가
    
}

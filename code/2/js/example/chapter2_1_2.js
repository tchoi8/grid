

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background('lightgrey');

    point(50, 50); //(50, 50)에 점이 있을 때
    rect(50, 50, 50, 50); //도형은 기준점의 오른쪽 아래로 생기지만
    text("안녕하세요", 50, 50); //텍스트는 기준 점의 오른쪽 위로 생깁니다.
}

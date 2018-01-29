var scrollSpeed_x=0.3;
var scrollSpeed_y=0.3;
function Update() {
    var offsetX= Time.time*scrollSpeed_x;
    var offsetY= Time.time*scrollSpeed_y;

    renderer.material.mainTextureOffset=Vector2(offsetY,offsetX);

}
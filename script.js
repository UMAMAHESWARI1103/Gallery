var image=document.querySelectorAll(".image-content");
var mainImage=document.querySelector("#main-image");
for(var i=0;i<image.length;i++)
{
    image[i].addEventListener("click",function()
{
    mainImage.src=this.src
});
}
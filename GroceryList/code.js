document.querySelector(".add").onclick = function(){	
if(document.querySelector(".input").value.length == 0)
	{
		alert("Please enter item name");
	}
	else{
		document.querySelector(".todoList").innerHTML += `
		<div class="task">
		<span class="taskInput">
		<i class="fa fa-circle"></i>
		${document.querySelector(".input").value}
		</span>
		<i class="fa fa-trash"></i>
		</div>
		`;
}
document.querySelector(".input").value = "";
var current_Task = document.querySelectorAll(".fa-trash");
for(var i=0; i<current_Task.length; i++)
{
	current_Task[i].onclick = function()
	{
		this.parentNode.remove();
	}};

};

!
function AudioBrowser() {
	this.Container = document.createElement("div");

	this.DragDropDiv = document.createElement("div");
	this.DropZone = document.createElement("div");
	this.DropZone.setAttribute("id", "drop_zone");
	this.Output = document.createElement("output");
	this.Output.setAttribute("id","list");

	function handleFileSelect(evt) {
	    evt.stopPropagation();
	    evt.preventDefault();

	    var files = evt.dataTransfer.files; // FileList object.

	    // files is a FileList of File objects. List some properties.
	    var output = [];
	    for (var i = 0, f; f = files[i]; i++) {
	      output.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a', ') - ',
		          f.size, ' bytes, last modified: ',
		          f.lastModifiedDate.toLocaleDateString(), '</li>');
	    }
	    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
	  }

	function handleDragOver(evt) {
	    evt.stopPropagation();
	    evt.preventDefault();
	}

  	//Setup the drag and drop listeners.
	this.DropZone.addEventListener('dragover', handleDragOver, false);
	this.DropZone.addEventListener('drop', handleFileSelect, false);


	this.DragDropDiv.setAttribute("class", "example");
	this.DragDropDiv.style.width = "400px"
	this.DragDropDiv.style.height = "300px"
	this.DragDropDiv.appendChild(this.DropZone);
	this.DragDropDiv.appendChild(this.Output);
	
	this.Container.appendChild(this.DragDropDiv);

}

AudioBrowser.prototype.Load = function() {
	MainWindow.appendChild(this.Container);
}

AudioBrowser.prototype.Unload = function() {
	MainWindow.removeChild(this.Container);
}



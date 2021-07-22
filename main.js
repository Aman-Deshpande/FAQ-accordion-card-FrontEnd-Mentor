document.querySelectorAll('.accordian__question').forEach(item => {
    item.addEventListener('click',event=>{
        console.log("Aman");
        
        if(!item.classList.contains('open')){
            console.log("toggle Accordian button")
            
            item.nextElementSibling.style.display = 'block';
            let accHeight = item.nextElementSibling.clientHeight;

            setTimeout(() => {
                item.nextElementSibling.style.height = accHeight+'px';
                item.nextElementSibling.style.display = '';
            }, 1);

            
            item.nextElementSibling.classList = 'accordian__collapse collapsing';

            setTimeout(() => {
                console.log("Open Accordian Content")
               item.nextElementSibling.classList = 'accordian__collapse collapse open' ;
            },300);
        }
        // close accordian item
        else{
            item.nextElementSibling.classList = 'accordian__collapse collapsing';

            setTimeout(() => {
                item.nextElementSibling.style.height='0px';
            }, 1);

            setTimeout(() => {
                console.log("close Accordian Content")
               item.nextElementSibling.classList ='accordian__collapse collapse' ;
               item.nextElementSibling.style.height='';
            },300);
        }
        
        
        item.classList.toggle('open');
    })
}); 
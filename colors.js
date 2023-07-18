
        var body = {
            SetColor:function(color) {
                // document.querySelector('body').style.color = color;
                $('body').css('color',color)
                },
            BackgroundColor:function(color){
                // document.querySelector('body').style.backgroundColor = color;
                $('body').css('backgroundColor',color);   
            }
        }
        
        var link = {
            SetColor:function(color){
                // var alist = document.querySelectorAll('a');
                // var i = 0;
                // while(i<alist.length){
                //     alist[i].style.color=color;
                //     i=i+1;
                // }
                $('a').css('color',color)
            }
        }        
        
        function nightdayHandler(a){
            if(a.value=='Night'){
                a.value='Day';
                body.BackgroundColor('black');
                body.SetColor('white');
                link.SetColor('powderblue');
            } else{
                a.value='Night';
                body.BackgroundColor('white');
                body.SetColor('black');
                link.SetColor('blue');
            }
        }

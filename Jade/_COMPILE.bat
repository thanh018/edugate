call rename assets\css assets\_css
call harp compile
call rename assets\_css assets\css
call lessc assets\css\layout.less www\assets\css\layout.css
call lessc assets\css\components.less www\assets\css\components.css
call lessc assets\css\responsive.less www\assets\css\responsive.css

call md www\assets\js
call xcopy assets\js www\assets\js /s/h/e/k/f/c
call md www\assets\images
call xcopy assets\images www\assets\images /s/h/e/k/f/c
call md www\assets\images-2
call xcopy assets\images-2 www\assets\images-2 /s/h/e/k/f/c
call md www\assets\libs
call xcopy assets\libs www\assets\libs /s/h/e/k/f/c
call md www\assets\vendors
call xcopy assets\vendors www\assets\vendors /s/h/e/k/f/c
call md www\assets\less
call xcopy assets\less www\assets\less /s/h/e/k/f/c
call md www\assets\font
call xcopy assets\font www\assets\font /s/h/e/k/f/c
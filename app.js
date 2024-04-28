const titel = document.querySelectorAll(".ac-titel")
const content = document.querySelectorAll(".ac-content")

titel.forEach(ele=> ele.onclick = ()=>{
    const activecontent=document.querySelector("#" + e.dataset.tab)
    if(activecontent.classList.contains('active')){
        activecontent.classList.remove('active')
        ele.classList.remove('active')
        activecontent.computedStyleMap.maxHeight=0
       }else{
        content.forEach(element => {
            element.classList.remove('active')
            element.computedStyleMap.maxHeight=0

        })
       titel.forEach(el => el.classList.remove('active'))

       el.classList.add('active')
       activecontent.classList.add('active')
       activecontent.style.maxHeight = activecontent.scrollHeight + 'px'

    }
    document.querySelector('[data-tab= "tab-3]').classList.add('active')
    document.querySelector('#tab-3').classList.add('active')
    document. querySelector('#tab-3'.style.maxHeight=document.querySelector('#tab-3').scrollHeight + "px")
})

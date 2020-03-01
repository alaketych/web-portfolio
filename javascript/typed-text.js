new TypeIt("#developer", {
    speed: 100,
    loop: false,
    waitUntilVisible: false
})
.type('web developer').pause(2000)
.delete(9)
.type('markup engineer').pause(550)
.delete(19)
.type('fullstack developer')
.go();
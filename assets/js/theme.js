const theme = document.getElementById('theme');

const themes = [ // themes[1][0] = dark theme | themes[1][1] = light theme
    ['--bg', ['hsl(0, 0%, 100%)', 'hsl(230, 17%, 14%)']],
    ['--top-bg-pattern', ['hsl(225, 100%, 98%)', 'hsl(232, 19%, 15%)']],
    ['--card-bg', ['hsl(227, 47%, 96%)', 'hsl(228, 28%, 20%)']],
    ['--text1', ['hsl(228, 12%, 44%)', 'hsl(228, 34%, 66%)']],
    ['--text2', ['hsl(230, 17%, 14%)', 'hsl(0, 0%, 100%)']],
    ['--toggle', ['hsl(230, 22%, 74%)', 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))']]
]

const changeColor = (key, value) => {
    document.documentElement.style.setProperty(key, value);
}

theme.addEventListener("click", () => {
    if (theme.checked == true) {
        console.log('dark');
        themes.forEach(c => {
            changeColor(c[0], c[1][1]);
        })
    } else {
        console.log('light');
        themes.forEach(c => {
            changeColor(c[0], c[1][0]);
        })
    }
})

{/* <label for="theme">change theme</label>
<input type="checkbox" name="theme" id="theme"></input> */}
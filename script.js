let currentNews = 0;

function showNews(index){
    currentNews = index;

    document.getElementById("title").innerText = news[index].title;

    changeLevel(1);
}

function changeLevel(level){

    document.getElementById("content").innerHTML =
`<h3>Level ${level}</h3>
<div class="article">
${news[currentNews].levels[level-1]}
</div>`;
}

function createNewsList() {
    const list = document.getElementById("news-list");
    list.innerHTML = "";

    news.forEach((item, index) => {
        list.innerHTML += `
            <div class="news-card" onclick="showNews(${index})">
                <h2>${item.title}</h2>
            </div>
        `;
    });
}

// 最後に実行
createNewsList();
showNews(0);
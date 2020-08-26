/************************** pages ************************/
let pages = document.querySelector(".pages");
    firstPage = document.querySelector(".page.first-page"),
    selectMode = document.querySelector(".page.select-mode"),
    howToPlay = document.querySelector(".page.how-to-play"),
    leaderboard = document.querySelector(".page.leaderboard"),
    aboutUs = document.querySelector(".page.about-us"),
    game = document.querySelector(".page.game");

let selectModeBackBtn = document.querySelector(".page.select-mode .back"),
    howToPlayBackBtn = document.querySelector(".page.how-to-play .back"),
    aboutUsBackBtn = document.querySelector(".page.about-us .back"),
    leaderboardBackBtn = document.querySelector(".page.leaderboard .back");

let selectModeNormal = document.querySelector(".page.select-mode .modes .mode.normal"),
    selectModeInfinity = document.querySelector(".page.select-mode .modes .mode.infinity"),
    selectModeCustom = document.querySelector(".page.select-mode .modes .mode.custom");

let customSettingsEle = document.querySelector(".popup.custom-mode");

let howToPlayBackTip = document.querySelector(".how-to-play.page .arrow-back"),
    howToPlayNextTip = document.querySelector(".how-to-play.page .arrow-next"),
    currentTip = 2,
    tips = Array.from(document.querySelectorAll(".how-to-play .tips .tip"));
/******************** First Page **********************/
document.querySelector(".btn.start").onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }

    selectMode.classList.add("active");
}
document.querySelector(".btn.how-to-play").onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }

    howToPlay.classList.add("active");
}
document.querySelector(".btn.leaderboard").onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }

    leaderboard.classList.add("active");
    
    if(leaderboardNormal.classList.contains("active"))
        normalLeaderboard();
    if(leaderboardInfinity.classList.contains("active"))
        infinityLeaderboard();
}
document.querySelector(".btn.about-us").onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }

    aboutUs.classList.add("active");
}
/************************** Select Mode ******************************/
selectModeBackBtn.onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }

    firstPage.classList.add("active");
}
selectModeNormal.onclick = () => {
    selectNormalDifficultiesEle.classList.add("show");
}
selectModeInfinity.onclick = () => {
    selectInfinityLevelsEle.classList.add("show");
}
selectModeCustom.onclick = () => {
    customSettingsEle.classList.add("show");
}
/************ Normal Mode */
let selectNormalDifficultiesEle = document.querySelector(".normal-select-difficulty");
let normalDifficulties = Array.from(document.querySelectorAll(".normal-select-difficulty .difficulties .difficulty"));
let normalDifficultiesStartBtn = document.querySelector(".normal-select-difficulty .start");

let normalLevelMsgEle = document.querySelector(".normal-level-msg");
let normalLevelMsgLevel = document.querySelector(".normal-level-msg .level-index");
let normalLevelMsgDifficulty = document.querySelector(".normal-level-msg .difficulty");
let normalLevelMsgGoal = document.querySelector(".normal-level-msg .goal");
let normalLevelMsgTime = document.querySelector(".normal-level-msg .time");
let normalLevelMsgStartBtn = document.querySelector(".normal-level-msg .start");

let normalMsgEle = document.querySelector(".normal-msg");
let normalMsgText = document.querySelector(".normal-msg .msg");
let normalMsgSave = document.querySelector(".normal-msg .save");
let normalMsgCancel = document.querySelector(".normal-msg .cancel");
let normalMsgEleLevel = document.querySelector(".normal-msg .msg .level");

let normalMsgWin = document.querySelector(".normal-msg .hidden-data.win"),
    normalMsgLevel = document.querySelector(".normal-msg .hidden-data.level"),
    normalMsgDifficulty = document.querySelector(".normal-msg .hidden-data.difficulty");


normalDifficulties.forEach(newDifficulty => {
    newDifficulty.addEventListener("click", () => {
        normalDifficulties.filter(oldDifficulty => oldDifficulty.classList.contains("active"))[0].classList.remove("active");
        newDifficulty.classList.add("active");
    });
});
normalDifficultiesStartBtn.onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }
    game.classList.add("active");

    startGame("normal",
                normalDifficulties.filter(difficulty => difficulty.classList.contains("active"))[0].getAttribute("data-difficulty"));
    selectNormalDifficultiesEle.classList.remove("show");
}
normalMsgSave.onclick = () => {
    normalMsgEle.classList.remove("show");

    selectUserMode.setAttribute("data-val", "normal");
    selectUserLevel.setAttribute("data-val", normalMsgLevel.getAttribute("data-val"));
    selectUserDifficulty.setAttribute("data-val", normalMsgDifficulty.getAttribute("data-val"));
    selectUserWin.setAttribute("data-val", normalMsgWin.getAttribute("data-val"));
    selectUserEle.classList.add("show");
}
normalMsgCancel.onclick = () => {
    this.location.reload();
}
/*********** infinity */
let selectInfinityLevelsEle = document.querySelector(".infinity-select-level");
let infinityLevels = Array.from(document.querySelectorAll(".infinity-select-level .levels .level"));
let infinityLevelsNextBtn = document.querySelector(".infinity-select-level .next");

let selectInfinityDifficultiesEle = document.querySelector(".infinity-select-difficulty");
let infinityDifficulties = Array.from(document.querySelectorAll(".infinity-select-difficulty .difficulties .difficulty"));
let infinityDifficultiesStartBtn = document.querySelector(".infinity-select-difficulty .start");

let infinityMsgEle = document.querySelector(".infinity-msg");
let infinityMsgSave = document.querySelector(".infinity-msg .save");
let infinityMsgCancel = document.querySelector(".infinity-msg .cancel");
let infinityMsgEleScore = document.querySelector(".infinity-msg .msg .score");

let infinityMsgScore = document.querySelector(".infinity-msg .hidden-data.score"),
    infinityMsgLevel = document.querySelector(".infinity-msg .hidden-data.level"),
    infinityMsgDifficulty = document.querySelector(".infinity-msg .hidden-data.difficulty");

infinityLevels.forEach(newLevel => {
    newLevel.addEventListener("click", () => {
        infinityLevels.filter(oldLevel => oldLevel.classList.contains("active"))[0].classList.remove("active");
        newLevel.classList.add("active");
    });
});
infinityLevelsNextBtn.onclick = () => {
    selectInfinityLevelsEle.classList.remove("show");
    selectInfinityDifficultiesEle.classList.add("show");
}

infinityDifficulties.forEach(newDifficulty => {
    newDifficulty.addEventListener("click", () => {
        infinityDifficulties.filter(oldDifficulty => oldDifficulty.classList.contains("active"))[0].classList.remove("active");
        newDifficulty.classList.add("active");
    });
});
infinityDifficultiesStartBtn.onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }
    game.classList.add("active");

    startGame("infinity",
                infinityDifficulties.filter(difficulty => difficulty.classList.contains("active"))[0].getAttribute("data-difficulty"), 
                infinityLevels.filter(level => level.classList.contains("active"))[0].getAttribute("data-level"));
    selectInfinityDifficultiesEle.classList.remove("show");
}
infinityMsgSave.onclick = () => {
    infinityMsgEle.classList.remove("show");

    selectUserMode.setAttribute("data-val", "infinity");
    selectUserLevel.setAttribute("data-val", infinityMsgLevel.getAttribute("data-val"));
    selectUserDifficulty.setAttribute("data-val", infinityMsgDifficulty.getAttribute("data-val"));
    selectUserScore.setAttribute("data-val", infinityMsgScore.getAttribute("data-val"));
    selectUserEle.classList.add("show");
}
infinityMsgCancel.onclick = () => {    
    this.location.reload();
}
/******************************** Custom mode *********/
let cells = Array.from(document.querySelectorAll(".custom-mode .category .obstacles .obstacle.cell"));
let obstacleRow = Array.from(document.querySelectorAll(".custom-mode .category .obstacles .obstacle.row"));

let customModeX = document.querySelector(".custom-mode .category .inputs input.startX");
let customModeY = document.querySelector(".custom-mode .category .inputs input.startY");
let customModeFirstSpeed = document.querySelector(".custom-mode .category .inputs input.firstSpeed");
let customModeAdditionSpeed = document.querySelector(".custom-mode .category .inputs input.additionSpeed");
let customModeDirectionEle = document.querySelector(".custom-mode .category .inputs input.direction");
let customModeStartBlocks = document.querySelector(".custom-mode .category .inputs input.startBlocks");
let customModeTime= document.querySelector(".custom-mode .category .inputs input.time");
let customModeGoal = document.querySelector(".custom-mode .category .inputs input.goal");
let customModeFoodGenratorSpeed = document.querySelector(".custom-mode .category .inputs input.foodGenratorSpeed");
let customModeFoodHideAfter = document.querySelector(".custom-mode .category .inputs input.foodLiveCycle");
let customModePotionGenratorSpeed = document.querySelector(".custom-mode .category .inputs input.potionGenratorSpeed");
let customModePotionHideAfter = document.querySelector(".custom-mode .category .inputs input.potionLiveCycle");
let customStartBtn = document.querySelector(".custom-mode .start");

let customMsgEle = document.querySelector(".custom-msg");
let customMsgText = document.querySelector(".custom-msg .msg");
let customMsgRetyBtn = document.querySelector(".custom-msg .content .rety");
let customMsgCancelBtn = document.querySelector(".custom-msg .content .cancel");

let snackGame;

cells.forEach(cell => {
    let code = () => {
        if(cell.classList.contains("active")) {
            cell.classList.remove("active");
        } else {
            cell.classList.add("active");
        }
    }
    document.addEventListener("mousedown", () => {
        cell.addEventListener("mouseover", code);
    });
    document.addEventListener("mouseup", () => {
        cell.removeEventListener("mouseover", code);
    });
    cell.addEventListener("click", code);
});
let customModeObstacles = [];

customStartBtn.onclick = () => {
    customSettingsEle.classList.remove("show");
    selectMode.classList.remove("active");
    game.classList.add("active");

    let customModeDirection = 
        ["right", "left", "up", "down"].includes(customModeDirectionEle.value)?customModeDirectionEle.value[0]:"r";

    obstacleRow.forEach(row => {
        let rowObstacles = [];

        Array.from(row.children).forEach(obstacle => {
            rowObstacles.push(obstacle.classList.contains("active"));
        });

        customModeObstacles.push(rowObstacles);
    });

    snackGame = new SnackGame(
        parseInt(customModeX.value), parseInt(customModeY.value), customModeTime.value, customModeGoal.value,
        {
            firstSpeed: parseInt(customModeFirstSpeed.value),
            additionSpeed: parseInt(customModeAdditionSpeed.value),
            direction: customModeDirection,
            startBlocks: parseInt(customModeStartBlocks.value),
            food: {
                generatorSpeed: parseInt(customModeFoodGenratorSpeed.value),
                hideAfter: parseInt(customModeFoodHideAfter.value)
            },
            potion: {
                generatorSpeed: parseInt(customModePotionGenratorSpeed.value),
                hideAfter: parseInt(customModePotionHideAfter.value)
            },
            obstacle: {

            },
            obstacles: [[0, 0, customModeObstacles]]
        }
    );

    snackGame.start();

    canvas.addEventListener("won", () => {
        customMsgEle.classList.add("show");
        customMsgText.innerHTML = "Congratulation!! <br />You won."
    });
    canvas.addEventListener("failed", () => {
        customMsgEle.classList.add("show");
        customMsgText.innerHTML = "Your score is <span class='score'>" + snackGame.score + "</span>";
    });
}
customMsgRetyBtn.onclick = () => {
    snackGame.newLevel(
        parseInt(customModeX.value), parseInt(customModeY.value), customModeTime.value, customModeGoal.value,
        {
            firstSpeed: parseInt(customModeFirstSpeed.value),
            additionSpeed: parseInt(customModeAdditionSpeed.value),
            direction: customModeDirection,
            startBlocks: parseInt(customModeStartBlocks.value),
            food: {
                generatorSpeed: parseInt(customModeFoodGenratorSpeed.value),
                hideAfter: parseInt(customModeFoodHideAfter.value)
            },
            potion: {
                generatorSpeed: parseInt(customModePotionGenratorSpeed.value),
                hideAfter: parseInt(customModePotionHideAfter.value)
            },
            obstacle: {

            },
            obstacles: [[0, 0, customModeObstacles]]
        }
    );
    customMsgEle.classList.remove("show");
}
customMsgCancelBtn.onclick = () => {
    this.location.reload();
}
/***************************** How To Play ****************************************/
howToPlayBackBtn.onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }

    firstPage.classList.add("active");
}
howToPlayBackTip.onclick = () => {
    if(currentTip != 2) {
        currentTip--;
        refreshTips();

        if(howToPlayNextTip.classList.contains("disabled")) {
            howToPlayNextTip.classList.remove("disabled");
        }

        if(currentTip == 2) {
            howToPlayBackTip.classList.add("disabled");
        }
    }
}
howToPlayNextTip.onclick = () => {
    if(currentTip != (tips.length - 1)) {
        currentTip++;
        refreshTips();

        if(howToPlayBackTip.classList.contains("disabled")) {
            howToPlayBackTip.classList.remove("disabled");
        }

        if(currentTip == (tips.length - 1)) {
            howToPlayNextTip.classList.add("disabled");
        }
    }
}

if(currentTip == 2) {
    howToPlayBackTip.classList.add("disabled");
}
if(currentTip == (tips.length - 1)) {
    howToPlayNextTip.classList.add("disabled");
}

let refreshTips = () => {
    let currentTipEle = tips[currentTip - 1];

    tips.forEach(tip => {
        if(tip.classList.contains("left")) {
            tip.classList.remove("left");
        }
        if(tip.classList.contains("middle")) {
            tip.classList.remove("middle");
        }
        if(tip.classList.contains("right")) {
            tip.classList.remove("right");
        }
    })

    tips[currentTip - 2].classList.add("left");
    tips[currentTip - 1].classList.add("middle");
    tips[currentTip].classList.add("right");
}
refreshTips();
/********************************** leaderboard *****************************************/
let selectUserEle = document.querySelector(".select-user"),
    selectUserEleUsers = document.querySelector(".select-user .content .users"),
    selectUserMode = document.querySelector(".select-user .hidden-data.mode"),
    selectUserWin = document.querySelector(".select-user .hidden-data.win"),
    selectUserLevel = document.querySelector(".select-user .hidden-data.level"),
    selectUserDifficulty = document.querySelector(".select-user .hidden-data.difficulty"),
    selectUserScore = document.querySelector(".select-user .hidden-data.score"),
    addUserInput = document.querySelector(".select-user .add-input"),
    addUserBtn = document.querySelector(".select-user .add-btn");

let leaderboardNormal = document.querySelector(".page.leaderboard .content .head .normal");
let leaderboardInfinity = document.querySelector(".page.leaderboard .content .head .infinity");
    
let leaderboardTable = document.querySelector(".leaderboard.page .content .body .table");

let users = localStorage.getItem("users");
if(users) {
    users = users.split(", ");
    users.forEach((user, index) => {
        selectUserEleUsers.innerHTML += `
            <div class="user" data-name="${user}">${user} <span class="delete"">X</div>
        `;
    })
    let deleteBtns = Array.from(document.querySelectorAll(".select-user .users .user .delete"));
    deleteBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            users.splice(Array.prototype.indexOf.call(selectUserEleUsers.children, btn.parentElement), 1);
            selectUserEleUsers.removeChild(btn.parentElement);
            if(users.length == 0) {
                selectUserEleUsers.innerHTML = `<div class="no-users">There is no users.</div>`;
            }
            
            localStorage.setItem("users", users.join(", "));
        });
    });
} else {
    selectUserEleUsers.innerHTML = `<div class="no-users">There is no users.</div>`;
    users = [];
}

leaderboardNormal.onclick = () => {
    if(leaderboardInfinity.classList.contains("active")) {
        leaderboardInfinity.classList.remove("active");
        leaderboardNormal.classList.add("active");

        normalLeaderboard();
    }
}
leaderboardInfinity.onclick = () => {
    if(leaderboardNormal.classList.contains("active")) {
        leaderboardNormal.classList.remove("active");
        leaderboardInfinity.classList.add("active");

        infinityLeaderboard();
    }
}

let saveFunction = (user) => {
    let usersLeaderboard = localStorage.getItem("leaderboard");
    let mode = selectUserMode.getAttribute("data-val");
    let difficulty = selectUserDifficulty.getAttribute("data-val");
    let win = selectUserWin.getAttribute("data-val");
    let level = selectUserLevel.getAttribute("data-val");
    let score = selectUserScore.getAttribute("data-val");
    let finalNormalData;
    let finalInfinityData;

    let d = new Date();
    let fullData = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}-${d.getMinutes()}`;

    if(usersLeaderboard) {
        usersLeaderboard = usersLeaderboard.split(";");

        usersLeaderboard.forEach((modeLeaderboard, index) => {
            let leaderboard = modeLeaderboard.split(",");
            if(mode == "normal") {
                if(index == 0) {
                    if(leaderboard[0] == "") {
                        leaderboard = [];
                    }
                    leaderboard.push(`${user.getAttribute("data-name")}:${difficulty}:${win}:${level}:${fullData}`);
                    finalNormalData = leaderboard.join(",");
                } else {
                    finalInfinityData = leaderboard.join(",");
                }
            } else if (mode = "infinity") {
                if(index == 1) {
                    if(leaderboard[0] == "") {
                        leaderboard = [];
                    }
                    leaderboard.push(`${user.getAttribute("data-name")}:${difficulty}:${level}:${score}:${fullData}`);
                    finalInfinityData = leaderboard.join(",");
                } else {
                    finalNormalData = leaderboard.join(",");
                }
            }
        });
        localStorage.setItem("leaderboard", (finalNormalData?finalNormalData:"") + ";" + (finalInfinityData?finalInfinityData:""));
    } else {
        if(mode == "normal") {
            localStorage.setItem("leaderboard", `${user.getAttribute("data-name")}:${difficulty}:${win}:${level}:${fullData};`);
        } else if (mode == "infinity") {
            localStorage.setItem("leaderboard", `;${user.getAttribute("data-name")}:${difficulty}:${level}:${score}:${fullData}`);
        }
    }

    this.location.reload();

}
Array.from(selectUserEleUsers.children).forEach(user => {
    user.addEventListener("click", () => {
        saveFunction(user);
    });
});
addUserBtn.onclick = () => {
    if(addUserInput.value.trim() != "") {
        if(selectUserEleUsers.children[0].classList.contains("no-users")) {
            selectUserEleUsers.innerHTML = "";
        }
        selectUserEleUsers.innerHTML += `
            <div class="user" data-name="${addUserInput.value}">${addUserInput.value} <span class="delete">X</div>
            `;
            
        
        users.push(addUserInput.value);
        
        addUserInput.value = "";
        localStorage.setItem("users", users.join(", "));

        selectUserEleUsers.children[users.length - 1].addEventListener("click", () => {
            saveFunction(selectUserEleUsers.children[users.length - 1])
        });
    }
}
leaderboardBackBtn.onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }

    firstPage.classList.add("active");
}

infinityLeaderboard = () => {
    leaderboardTable.innerHTML = "";

    let data = localStorage.getItem("leaderboard");

    if(data) {
        if(data.split(";")[1]) {
            data = data.split(";")[1].split(",");

            leaderboardTable.innerHTML = `
                <div class="row head">
                    <div class="rank">Rank</div>
                    <div class="name">Name</div>
                    <div class="difficulty">Difficulty</div>
                    <div class="level">Level</div>
                    <div class="score">score</div>
                    <div class="date">Date</div>
                    <div class="tools">Tool</div>
                </div>
            `;

            let newUsers = [];
            let oldUsers = [...data];


            for(let r1 = 0; r1 < data.length; r1++) {
                let biggestScore = -1;
                let newUser;

                oldUsers.forEach((r2, index) => {
                    if(r2.split(":")[3] > biggestScore) {
                        biggestScore = r2.split(":")[3];
                        newUser = index;
                    }
                    
                    
                });

                newUsers.push(oldUsers[newUser]);
                
                oldUsers.splice(newUser, 1);
            };

            

            newUsers.forEach((user, index) => {
                let userData = user.split(":");

                leaderboardTable.innerHTML += `
                    <div class="row body">
                        <div class="rank">${index + 1}</div>
                        <div class="name">${userData[0]}</div>
                        <div class="difficulty">${userData[1]}</div>
                        <div class="level">${userData[2]}</div>
                        <div class="score">${userData[3]}</div>
                        <div class="date">${userData[4]}</div>
                        <div class="tools"><button class="delete" data-index="${index}">X</button></div>
                    </div>
                `;
            });

            let deleteBtn = leaderboardTable.children[leaderboardTable.children.length - 1].children[6].children[0];
            deleteBtn.addEventListener("click", () => {
                let oldData = localStorage.getItem("leaderboard");
                let newData = oldData.split(";")[1].split(",");
                newData.splice(newData.indexOf(newData[deleteBtn.getAttribute("data-index")]), 1);

                localStorage.setItem("leaderboard",  oldData.split(";")[0] + ";" + newData);

                infinityLeaderboard();
            });
        } else {
            leaderboardTable.innerHTML = `
                <div class="no-data">There's no saved data</div>
            `;
        }
    } else {
        leaderboardTable.innerHTML = `
            <div class="no-data">There's no saved data</div>
        `;
    }

}
normalLeaderboard = () => {
    leaderboardTable.innerHTML = "";

    let data = localStorage.getItem("leaderboard");

    if(data) {
        if(data.split(";")[0]) {
            data = data.split(";")[0].split(",");

            leaderboardTable.innerHTML = `
                <div class="row head">
                    <div class="rank">Rank</div>
                    <div class="name">Name</div>
                    <div class="difficulty">Difficulty</div>
                    <div class="won-lost">Won/Lost</div>
                    <div class="level">Level</div>
                    <div class="date">Date</div>
                    <div class="tools">Tool</div>
                </div>
            `;

            let newUsers = [];
            let oldUsers = [...data];


            for(let r1 = 0; r1 < data.length; r1++) {
                let biggestScore = -1;
                let newUser;

                oldUsers.forEach((r2, index) => {
                    if(r2.split(":")[3].split("-")[0] > biggestScore) {
                        biggestScore = r2.split(":")[3].split("-")[0];
                        newUser = index;
                    }
                    
                    
                });

                newUsers.push(oldUsers[newUser]);
                
                oldUsers.splice(newUser, 1);
            };

            

            newUsers.forEach((user, index) => {
                let userData = user.split(":");

                leaderboardTable.innerHTML += `
                    <div class="row body">
                        <div class="rank">${index + 1}</div>
                        <div class="name">${userData[0]}</div>
                        <div class="difficulty">${userData[1]}</div>
                        <div class="level">${userData[2]}</div>
                        <div class="score">${userData[3]}</div>
                        <div class="date">${userData[4]}</div>
                        <div class="tools"><button class="delete" data-index="${index}">X</button></div>
                    </div>
                `;
            });

            let deleteBtn = leaderboardTable.children[leaderboardTable.children.length - 1].children[6].children[0];
            deleteBtn.addEventListener("click", () => {
                let oldData = localStorage.getItem("leaderboard");
                let newData = oldData.split(";")[0].split(",");
                newData.splice(newData.indexOf(newData[deleteBtn.getAttribute("data-index")]), 1);

                localStorage.setItem("leaderboard", newData + ";" + oldData.split(";")[1]);

                normalLeaderboard();
            });
        } else {
            leaderboardTable.innerHTML = `
                <div class="no-data">There's no saved data</div>
            `;
        }
    } else {
        leaderboardTable.innerHTML = `
            <div class="no-data">There's no saved data</div>
        `;
    }

}
/****************************** about us ************************************/
aboutUsBackBtn.onclick = () => {
    for(let i = 0; i < pages.childElementCount; i++) {
        if(pages.children[i].classList.contains("active")) {
            pages.children[i].classList.remove("active");
        }
    }

    firstPage.classList.add("active");
}
/********************* The Game ***********************/
let levels = [];

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        levels = JSON.parse(this.responseText);
    }
};
xhttp.open("GET", "levels.json", true);
xhttp.send();

let canvas = document.querySelector(".snack-game .board");
let context = canvas.getContext("2d");

let printPotionsEle = document.querySelector(".print-potions");

let smartPhoneKeys = Array.from(document.querySelectorAll(".smart-phone-buttons .btn"));

function SnackBlock(x, y, width, height, color, stroke, dir, moves = [], allowMove = true) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.stroke = stroke;
    this.dir = dir;
    this.moves = moves;
    this.allowMove = allowMove;

    this.refreshXY = () => {
        switch(this.dir) {
            case "l":
                this.x -= this.width;
                break;
            case "r":
                this.x += this.width;
                break;
            case "u":
                this.y -= this.height;
                break;
            case "d":
                this.y += this.height;
                break;
        }
        
        this.x = (this.x < 0? canvas.width + this.x: this.x);
        this.x = (this.x >= canvas.width? this.x - canvas.width: this.x);
        this.y = (this.y < 0? canvas.height + this.y: this.y);
        this.y = (this.y >= canvas.height? this.y - canvas.height: this.y);
    }
}
function Snack(x, y, cWidth, cHeight, sBlocks, speed, dir, hColor, bColor) {
    this.cCount = 0;
    this.cw = cWidth;
    this.ch = cHeight;
    this.cx = x;
    this.cy = y;
    let moveInterval;
    
    this.direction = (((dir != "l") && (dir != "r") && (dir != "u") && (dir != "d"))? "r":dir);
    this.speed = (1000 / speed);
    
    this.head = new SnackBlock(this.cx, this.cy, this.cw, this.ch, hColor, null, this.direction);
    this.body = [];

    this.addBlock = () => {
        if(this.body.length == 0) {
            let blockX = this.cx;
            let blockY = this.cy;

            switch(this.direction) {
                case "l":
                    blockX = this.cx + ((this.cCount + 1) * this.cw);
                    break;
                case "r":
                    blockX = this.cx - ((this.cCount + 1) * this.cw);
                    break;
                case "u":
                    blockY = this.cy + ((this.cCount + 1) * this.ch);
                    break;
                case "d":
                    blockY = this.cy - ((this.cCount + 1) * this.ch);
                    break;
            }
            
            blockX = (blockX < 0? canvas.width + blockX: blockX);
            blockX = (blockX > canvas.width? blockX - canvas.width: blockX);
            blockY = (blockY < 0? canvas.height + blockY: blockY);
            blockY = (blockY > canvas.height? blockY - canvas.height: blockY);

            
            this.body.push(new SnackBlock(blockX, blockY, this.cw, this.ch, bColor, hColor, this.direction));
            this.cCount++;
        } else {
            let lastBlock = this.body[this.body.length - 1];
            let newMoves = [];
            lastBlock.moves.forEach(move => {
                newMoves.push({
                    direction: move.direction,
                    turns: move.turns + 1
                });
            });

            let newBlock = new SnackBlock(lastBlock.x,
                                    lastBlock.y, 
                                    lastBlock.width, 
                                    lastBlock.height, 
                                    lastBlock.color, 
                                    lastBlock.stroke, 
                                    lastBlock.dir, 
                                    newMoves, 
                                    lastBlock.allowMove);
            
            switch(newBlock.dir) {
                case "l":
                    newBlock.x += this.cw;
                    break;
                case "r":
                    newBlock.x -= this.cw;
                    break;
                case "u":
                    newBlock.y += this.ch;
                    break;
                case "d":
                    newBlock.y -= this.ch;
                    break;
            }
            this.body.push(newBlock);
        }
        this.cCount++;
    }
    this.changeDir = (dir) => {
        switch(dir) {
            case "l":
                if (this.direction != "r") {
                    this.direction = dir;
                }
                break;
            case "r":
                if (this.direction != "l") {
                    this.direction = dir;
                }
                break;
            case "u":
                if (this.direction != "d") {
                    this.direction = dir;
                }
                break;
            case "d":
                if (this.direction != "u") {
                    this.direction = dir;
                }
                break;
        }

        if(this.head.allowMove) {
            this.head.dir = this.direction;
            this.head.allowMove = false;
        }
        
        this.body.forEach((block, index) => {
            if(block.allowMove){
                block.moves.push({
                    direction: this.direction,
                    turns: index + 1
                });
            }
            block.allowMove = false;
        });
    }
    this.eat = (score) => {
        if(score >= 0) {
            for(let i = 0; i < score; i++) {
                this.addBlock();
            }
        } else {
            if(this.body.length != sBlocks) {
                let decreasing = Math.abs(score);
                if(this.body.length - decreasing >= sBlocks) {
                    this.body.splice(this.body.length - decreasing, decreasing);
                } else {
                    decreasing = this.body.length - sBlocks;
                    this.body.splice(this.body.length - decreasing, decreasing);
                }
            }
        }
    }
    this.draw = () => {

        this.body.forEach((block, index) => {
            if((this.head.x == block.x) && (this.head.y == block.y)) {
                if (index + 1 != sBlocks) {
                    if (index + 1 < sBlocks) {
                        this.body.splice(sBlocks);
                    } else {
                        this.body.splice(index);
                    }
                }
            }
        });

        this.body.forEach((block) => {
            context.fillStyle = block.stroke;
            context.fillRect(block.x, block.y, block.width, block.height);
            context.fillStyle = block.color;
            context.fillRect(block.x + 1, block.y + 1, block.width - 2, block.height - 2);
        });
        context.fillStyle = this.head.color;
        context.fillRect(this.head.x, this.head.y, this.head.width, this.head.height);
    }
    this.move = () => {
        this.head.allowMove = true;

        this.body.forEach((block, index) => {
            block.allowMove = true;
            block.moves = block.moves.filter(move => move.turns >= 0);
            block.moves.forEach((move, index) => {
                if(move.turns == 0) {
                    block.dir = move.direction;
                    move.turns--;
                } else {
                    move.turns--;
                }
            });
        });

        this.head.refreshXY();
        this.body.forEach((block) => {
            block.refreshXY();
        });
    }
    this.newLevel = (newX, newY, newCWidth, newCHeight, newSBlocks, newSpeed, newDir, newHColor, newBColor) => {
        this.cw = newCWidth;
        this.ch = newCHeight;
        this.cx = newX;
        this.cy = newY;
        this.cCount = 0;

        this.direction = (((newDir != "l") && (newDir != "r") && (newDir != "u") && (newDir != "d"))? "r":newDir);
        this.speed = (1000 / newSpeed);
        
        this.head = new SnackBlock(this.cx, this.cy, this.cw, this.ch, newHColor, null, this.direction);
        this.body = [];

        for(i = 0; i < newSBlocks; i++) {
            this.addBlock();
        }
    }
    this.stop = () => {
        clearInterval(moveInterval);
    }

    for(i = 0; i < sBlocks; i++) {
        this.addBlock();
    }

}
function food(x, y, width, height, imgName, score) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imgName = imgName;
    this.score = score;
    this.sound = document.getElementById(`${imgName}-food-sound`);
    this.ableDrawing = true;

    this.show = () => {
        if (this.ableDrawing) {
            let foodImg = document.getElementById(this.imgName + "-food");
            //context.drawImage(foodImg, this.x - (this.width / 2), this.y - (this.height / 2) , this.width * 2, this.height * 2);
            context.drawImage(foodImg, this.x, this.y, this.width, this.height);
        }
    }
}
function Foods(foodWidth, foodHeight, foodGeneratorSpeed, foodHideAfter, foodTypes, snack, obstacles) {
    this.foodWidth = foodWidth;
    this.foodHeight = foodHeight;
    this.foodGeneratorSpeed = foodGeneratorSpeed;
    this.foodHideAfter = foodHideAfter;
    this.foodTypes = foodTypes;

    this.turnOn = true;

    this.foods = [];
    this.obstacles = obstacles;
    this.index = 0;

    let generateFoodInterval;

    this.addFoodSounds = () => {
        let foodSounds = document.createElement("div");
        foodSounds.className = "sounds";

        this.foodTypes.forEach(food => {
            let foodSoundEle = document.createElement("audio");
            foodSoundEle.preload = true;
            foodSoundEle.id = `${food.name}-food-sound`;

            food.soundSources.forEach(source => {
                let soundSource = "<source src='" + source[0] + "' type='audio/" + source[1] + "' />";
                foodSoundEle.innerHTML += soundSource;
            });

            foodSounds.append(foodSoundEle);
        });
        document.body.append(foodSounds);
        
    }
    this.addFoodImages = () => {
        let foodImages = document.createElement("div");
        foodImages.className = "foods";
        this.foodTypes.forEach(food => {
            let foodEle = document.createElement("img");
            foodEle.src = food.src;
            foodEle.id = `${food.name}-food`;
            foodImages.append(foodEle);
        });
        document.body.append(foodImages);
    }
    this.generateFood = () => {
        generateFoodInterval = setInterval(() => {
            if(this.turnOn) {
                let foodX;
                let foodY;
                let validPosition = false;
    
                do {
                    validPosition = true;
    
                    let randomX = (Math.floor(Math.random() * canvas.width));
                    let randomY = (Math.floor(Math.random() * canvas.height));
                    foodX = randomX - (randomX % this.foodWidth);
                    foodY = randomY - (randomY % this.foodHeight);
    
                    if (foodX == snack.head.x && foodY == snack.head.y) {
                        validPosition = false;
                    }
                    snack.body.forEach(block => {
                        if (foodX == block.x && foodY == block.y) {
                            validPosition = false;
                        }
                    });
                    this.obstacles.forEach((obstacle, index) => {
                        obstacle.blocksXY.forEach(block => {
                            if((foodX == block[0]) && (foodY == block[1])) {
                                validPosition = false;
                            }
                        });
                    });
    
                } while (!validPosition);
                
                /****/
                let randomFoodNumber = Math.floor(Math.random() * 100);
                let foodName;
                let foodScore;
                let foodFound = false;
                this.foodTypes.forEach(food => {
                    if(!foodFound) {
                        if(randomFoodNumber < food.percent) {
                            foodName = food.name;
                            foodScore = food.score;
                            foodFound = true;
                        } else {
                            randomFoodNumber -= food.percent;
                        }
                    }
                });
    
                this.foods.push(new food(foodX, foodY, this.foodWidth, this.foodHeight, foodName, foodScore));
                //let index = this.foods.length - 1;
                
                let hide = () => {
                    let time = this.foodHideAfter * 1000;

                    let interval = setInterval(() => {
                        if(this.turnOn) {
                            if(time == 0) {
                                this.foods[this.index].ableDrawing = false;
                                this.index++;
                                clearInterval(interval);
                            }
                            
                            time -= this.foodHideAfter * 100;
                        }
                    }, this.foodHideAfter * 100);
                }
                hide();
            }
        }, this.foodGeneratorSpeed);
    }
    this.newLevel = (newObstacles) => {
        this.foods.forEach((oneFood) => {
            oneFood.ableDrawing = false;
        });
        this.obstacles = newObstacles;
    }
    this.draw = () => {
        this.foods.forEach((food, index) => {
            food.show();
        });
    }
}
function Obstacle(x, y, blockWidth, blockHeight, color, stroke, blocks) {
    this.x = x;
    this.y = y;
    this.blockWidth = blockWidth;
    this.blockHeight = blockHeight;
    this.blocks = blocks;
    this.blocksXY = [];

    this.draw = () => {
        let x = this.x;
        let y = this.y;

        this.blocksXY = [];
        for(let i = 0; i < blocks.length; i++) {
            for(let j = 0; j < blocks[i].length; j++) {
                if(blocks[i][j]) {
                    context.fillStyle = stroke;
                    context.fillRect(x, y, blockWidth, blockHeight);
                    context.fillStyle = color;
                    context.fillRect(x + 1, y + 1, blockWidth - 2, blockHeight - 2);

                    this.blocksXY.push([x, y]);
                }
                x += this.blockWidth;
            }
            x = this.x;
            y += this.blockHeight;
        }
    }
}
function Potion(x, y, width, height, name, type, effect, time, imgSrc) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.name = name;
    this.imgSrc = imgSrc;
    this.sound = document.getElementById(`${name}-potion-sound`);
    this.ableDrawing = true;
    this.type = type;
    this.effect = effect;
    this.time = time;

    this.show = () => {
        if (this.ableDrawing) {
            let percent = 1.3;
            let PotionImg = document.getElementById(this.name + "-potion");
            context.drawImage(PotionImg, this.x - (this.width / (percent * 7)), this.y , this.width * percent, this.height * percent);
            //context.drawImage(PotionImg, this.x, this.y, this.width, this.height);
        }
    }
}
function Potions(potionWidth, potionHeight, potionGeneratorSpeed, potionHideAfter, potionTypes, snack, obstacles) {
    this.potionWidth = potionWidth;
    this.potionHeight = potionHeight;
    this.potionGeneratorSpeed = potionGeneratorSpeed;
    this.potionHideAfter = potionHideAfter;
    this.potionTypes = potionTypes;

    this.turnOn = true;

    this.potions = [];
    this.obstacles = obstacles;

    this.index = 0;

    let generatePotionInterval;

    this.addPotionSounds = () => {
        let potionSounds = document.createElement("div");
        potionSounds.className = "sounds";

        this.potionTypes.forEach(potion => {
            let potionSoundEle = document.createElement("audio");
            potionSoundEle.preload = true;
            potionSoundEle.id = `${potion.name}-potion-sound`;

            potion.soundSources.forEach(source => {
                let soundSource = "<source src='" + source[0] + "' type='audio/" + source[1] + "' />";
                potionSoundEle.innerHTML += soundSource;
            });

            potionSounds.append(potionSoundEle);
        });
        document.body.append(potionSounds);
        
    }
    this.addPotionImages = () => {
        let potionImages = document.createElement("div");
        potionImages.className = "potions";
        this.potionTypes.forEach(potion => {
            let potionEle = document.createElement("img");
            potionEle.src = potion.src;
            potionEle.id = `${potion.name}-potion`;
            potionImages.append(potionEle);
        });
        document.body.append(potionImages);
    }
    this.generatePotion = () => {
        generatePotionInterval = setInterval(() => {
            if(this.turnOn) {
                let potionX;
                let potionY;
                let validPosition = false;
    
                do {
                    validPosition = true;
    
                    let randomX = (Math.floor(Math.random() * canvas.width));
                    let randomY = (Math.floor(Math.random() * canvas.height));
                    potionX = randomX - (randomX % this.potionWidth);
                    potionY = randomY - (randomY % this.potionHeight);
    
                    if (potionX == snack.head.x && potionY == snack.head.y) {
                        validPosition = false;
                    }
                    snack.body.forEach(block => {
                        if (potionX == block.x && potionY == block.y) {
                            validPosition = false;
                        }
                    });
                    this.obstacles.forEach((obstacle, index) => {
                        obstacle.blocksXY.forEach(block => {
                            if((potionX == block[0]) && (potionY == block[1])) {
                                validPosition = false;
                            }
                        });
                    });
    
                } while (!validPosition);
                
                /****/
                let randomPotionNumber = Math.floor(Math.random() * 100);
                let potionName;
                let potionFound = false;
                let potionEffectType;
                let potionEffect;
                let potionTime;
                let imgSrc;
                this.potionTypes.forEach(potion => {
                    if(!potionFound) {
                        if(randomPotionNumber < potion.percent) {
                            potionName = potion.name;
                            potionEffectType = potion.type;
                            potionEffect = potion.effect;
                            potionTime = potion.time;
                            imgSrc = potion.src;
    
                            potionFound = true;
                        } else {
                            randomPotionNumber -= potion.percent;
                        }
                    }
                });
    
                this.potions.push(new Potion(potionX, potionY, 
                                                this.potionWidth, this.potionHeight, potionName, 
                                                potionEffectType, potionEffect, potionTime, imgSrc));
                //let index = this.potions.length - 1;
    
                let hide = () => {
                    let time = this.potionHideAfter * 1000;
    
                    let interval = setInterval(() => {
                        if(this.turnOn) {
                            if(time == 0) {
                                this.potions[this.index].ableDrawing = false;
                                this.index++;
                                clearInterval(interval);
                            }
                            
                            time -= this.potionHideAfter * 100;
                        }
                    }, this.potionHideAfter * 100);
                }
                hide();
            }

        }, this.potionGeneratorSpeed);
    }
    this.newLevel = (newObstacles) => {
        this.potions.forEach(onePotion => {
            onePotion.ableDrawing = false;
        });
        this.obstacles = newObstacles;
    }
    this.draw = () => {
        this.potions.forEach((potion, index) => {
            potion.show();
        });
    }
}
function SnackGame(x, y, time, goal = null, configs = {food: {}, potion: {}, obstacle: {}}) {
    this.startX = x;
    this.startY = y;
    this.startBlocks = configs.startBlocks || 15;
    this.direction = configs.direction || "r";
    this.firstSpeed = configs.firstSpeed || 5;
    this.speed = this.firstSpeed;
    this.speedUp = 1;
    this.additionSpeed = configs.additionSpeed || .25;
    this.keys = configs.keys || ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
    this.blockWidth = configs.blockWidth || 15;
    this.blockHeight = configs.blockHeight || 15;
    this.headColor = configs.headColor || "#ff5722";
    this.bodyColor = configs.bodyColor || "#ff9800";
    /*****/
    this.foodWidth = configs.food.width || 15;
    this.foodHeight = configs.food.height || 15;
    this.foodGeneratorSpeed = 1000 / (configs.food.generatorSpeed || 1 / 2) ;
    this.foodHideAfter = configs.food.hideAfter || 4;
    this.scoreUnitValue = 1;
    this.foodTypes = configs.food.types || [{
        name: "apple",
        src: "images/foods/apple.svg",
        soundSources: [["sounds/apple.mp3", "mpeg"], ["sounds/apple.wav", "wav"]],
        score: 1,
        percent: 60
    },
    {
        name: "goldenApple",
        src: "images/foods/goldenApple.svg",        
        soundSources: [["sounds/goldenApple.mp3", "mpeg"], ["sounds/goldenApple.wav", "wav"]],
        score: 3,
        percent: 10
    },
    {
        name: "wormApple",
        src: "images/foods/wormApple.svg",
        soundSources: [["sounds/wormApple.mp3", "mpeg"], ["sounds/wormApple.wav", "wav"]],
        score: -1,
        percent: 30
    }];
    /****/
    this.potionWidth = configs.potion.width || 15;
    this.potionHeight = configs.potion.height || 15;
    this.potionGeneratorSpeed = 1000 / (configs.potion.generatorSpeed || 1 / 5) ;
    this.potionHideAfter = configs.potion.hideAfter || 4;
    this.potionTypes = configs.potion.types || [{
        name: "speedUpSmall",
        type: "SPEED",
        src: "images/potions/speedUpSmall.svg",
        soundSources: [["sounds/speedUpSmall.mp3", "mpeg"], ["sounds/speedUpSmall.wav", "wav"]],
        effect: () => 1.5,
        time: 20,
        percent: 40
    },
    {
        name: "speedDownSmall",
        type: "SPEED",
        src: "images/potions/speedDownSmall.svg",
        soundSources: [["sounds/speedDownSmall.mp3", "mpeg"], ["sounds/speedDownSmall.wav", "wav"]],
        effect: () => .5,
        time: 20,
        percent: 40
    },
    {
        name: "scorePowerSmall",
        type: "SCORE",
        src: "images/potions/scorePowerSmall.svg",
        soundSources: [["sounds/scorePowerSmall.mp3", "mpeg"], ["sounds/scorePowerSmall.wav", "wav"]],
        effect: () => 2,
        time: 30,
        percent: 20
    }];
    /****/
    this.obstacleWidth = configs.obstacle.width || 15;
    this.obstacleHeight = configs.obstacle.height || 15;
    this.obstacleColor = configs.obstacle.color || "#403737";
    this.obstacleStroke = configs.obstacle.stroke || "#000";
    /****/
    this.turnOn = false;
    let failed = false;
    this.score = 0;
    let drankPotions = [];

    let failedEvent = new CustomEvent("failed");
    let wonEvent = new CustomEvent("won");
    this.goal = goal;
    this.time = time;
    this.timeElement = document.querySelector(".time");
    let timeOn = false;
    /****/
    document.querySelector(".score").innerHTML = 0 + (this.goal != 0?" / " + this.goal:"");
    if(this.time == "infinity") {
        this.timeElement.innerHTML = "∞";
    } else {            
        this.timeElement.innerHTML =    `${Math.floor(this.time / 60) < 10?
                                                            (Math.floor(this.time / 60) < 1?
                                                                "00":"0" + Math.floor(this.time / 60)):
                                                            (Math.floor(this.time / 60))}:
                                                        ${(this.time % 60 < 10? 
                                                            (this.time % 60 < 1)?
                                                                "00":"0" + this.time % 60:
                                                            this.time % 60)}`;
    }
    /****/
    let snack = new Snack(this.startX, this.startY,
                            this.blockWidth, this.blockHeight, 
                            this.startBlocks, this.speed, this.direction, 
                            this.headColor, this.bodyColor);
    this.obstacles = [];
    /****/
    if(configs.obstacles) {
        configs.obstacles.forEach(obstacle => {
            this.obstacles.push(new Obstacle(obstacle[0], obstacle[1], this.obstacleWidth, this.obstacleHeight, this.obstacleColor, this.obstacleStroke, obstacle[2]));
        });
    }
    /****/
    let foods = new Foods(this.foodWidth, this.foodHeight, this.foodGeneratorSpeed, this.foodHideAfter, this.foodTypes, snack, this.obstacles);
    let potions = new Potions(this.potionWidth, this.potionHeight, this.potionGeneratorSpeed, this.potionHideAfter, this.potionTypes, snack, this.obstacles);
    /*****/
    let switchDir = (e) => {
        switch(e.key) {
            case this.keys[0]:
                e.preventDefault();
                snack.changeDir("l");
                break;
            case this.keys[1]:
                e.preventDefault();
                snack.changeDir("r");
                break;
            case this.keys[2]:
                e.preventDefault();
                snack.changeDir("u");
                break;
            case this.keys[3]:
                e.preventDefault();
                snack.changeDir("d");
                break;
        }
    }
    smartPhoneKeys[0].addEventListener("click", () => {
        snack.changeDir("l");

        smartPhoneKeys.forEach(key => {
            if(key.classList.contains("active")) {
                key.classList.remove("active");
            }
        });
        smartPhoneKeys[0].classList.add("active");
    });
    smartPhoneKeys[1].addEventListener("click", () => {
        snack.changeDir("r");
        smartPhoneKeys.forEach(key => {
            if(key.classList.contains("active")) {
                key.classList.remove("active");
            }
        });
        smartPhoneKeys[1].classList.add("active");
    });
    smartPhoneKeys[2].addEventListener("click", () => {
        snack.changeDir("u");
        smartPhoneKeys.forEach(key => {
            if(key.classList.contains("active")) {
                key.classList.remove("active");
            }
        });
        smartPhoneKeys[2].classList.add("active");
    });
    smartPhoneKeys[3].addEventListener("click", () => {
        snack.changeDir("d");
        smartPhoneKeys.forEach(key => {
            if(key.classList.contains("active")) {
                key.classList.remove("active");
            }
        });
        smartPhoneKeys[3].classList.add("active");
    });
    let refreshScore = () => {
        if(this.score != (snack.body.length - this.startBlocks)) {
            this.score = (snack.body.length - this.startBlocks);
            if(this.goal) {
                document.querySelector(".score").innerHTML = this.score + " / " + this.goal;

                if(this.score >= this.goal) {
                    this.stop("Congratulations you won", "won");
                }
            } else {
                document.querySelector(".score").innerHTML = this.score;
            }
        }
    }
    let refreshSpeed = () => {
        this.speed = this.firstSpeed + ((snack.body.length - this.startBlocks) * this.additionSpeed);
    }
    let eat = () => {
        foods.foods.filter(food => food.ableDrawing).forEach((food, index) => {
            if((snack.head.x == food.x) && (snack.head.y == food.y)) {
                if(food.score > 0) {
                    snack.eat(food.score * this.scoreUnitValue);
                } else {
                    snack.eat(food.score);
                }
                food.sound.play();
                food.ableDrawing = false;
            }
        });
    }
    let drink = () => {
        potions.potions.filter(potion => potion.ableDrawing).forEach((potion, index) => {
            if((snack.head.x == potion.x) && (snack.head.y == potion.y)) {

                drankPotions.forEach((drankPotion, index) => {
                    if(potion.type == drankPotion.type) {
                        drankPotions.splice(index, 1);
                    }
                });

                switch(potion.type) {
                    case "SPEED":
                        this.speedUp = potion.effect();
                        break;
                    case "SCORE":
                        this.scoreUnitValue = potion.effect();
                        break;
                }
                drankPotions.push(potion);

                potion.sound.play();
                potion.ableDrawing = false;
            }
        });
    }
    let potionsDecreaseTime = () => {
        setInterval(() => {
            if(this.turnOn) {
                printPotionsEle.innerHTML = "";

                drankPotions.forEach((potion, index) => {
                    let time = potion.time;
                    let minutes = Math.floor(time / 60);
                    let seconds = time - minutes;

                    potion.time = time - 1;

                    if (minutes == 0) minutes = "00";
                    else if (minutes < 10) minutes = "0" + minutes;

                    if (seconds.length == 0) seconds = "00";
                    else if (seconds < 10) seconds = "0" + seconds;

                    printPotionsEle.innerHTML +=    `<div class="potion">
                                                        <img src="${potion.imgSrc}" class="image" />
                                                        <span class="name">${potion.name}</span>
                                                        <span class="time">(${minutes}:${seconds})</span>
                                                    </div>`;

                
                    if(potion.time == 0) {
                        switch(potion.type) {
                            case "SPEED":
                                this.speedUp = 1;
                                break;
                            case "SCORE":
                                this.scoreUnitValue = 1;
                                break;
                        }

                        drankPotions.splice(index, 1);  
                    } 
                });
            }
        }, 1000);
    }
    let crush = () => {
        this.obstacles.forEach((obstacle, index) => {
            obstacle.blocksXY.forEach(block => {
                if((snack.head.x == block[0]) && (snack.head.y == block[1])) {
                    this.stop("You failed", "failed");
                    failed = true;
                }
            });
        });
    }
    this.decreaseTime = () => {
        setTimeout(() => {
            if(this.turnOn) {
                if(this.time == "infinity") {
                    this.timeElement.innerHTML = "∞";
                } else {            
                    this.time--;
                    this.timeElement.innerHTML =    `${Math.floor(this.time / 60) < 10?
                                                                        (Math.floor(this.time / 60) < 1?
                                                                            "00":"0" + Math.floor(this.time / 60)):
                                                                        (Math.floor(this.time / 60))}:
                                                                    ${(this.time % 60 < 10? 
                                                                        (this.time % 60 < 1)?
                                                                            "00":"0" + this.time % 60:
                                                                        this.time % 60)}`;
                    if(this.time == 0) {
                        this.stop("Time out", "failed");
                    }
                }
            }
            this.decreaseTime();
        }, 1000);
    }
    this.turnAllOn = () => {
        this.turnOn = true;
        foods.turnOn = true;
        potions.turnOn = true;
        failed = false;
    }
    this.move = () => {
        setTimeout(() => {
            if(this.turnOn) {
                snack.move();
                crush();
                
                if(!failed) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    
                    this.obstacles.forEach(obstacle => {
                        obstacle.draw();
                    })
                    snack.draw();
                    eat();
                    potions.draw();
                    drink();
                    foods.draw();
                }

                refreshScore();
                refreshSpeed();
            }
            this.move();

        }, 1000 / (this.speed * this.speedUp));
    }
    this.newLevel = (newX, newY, newTime, newGoal = null, newConfigs = {food: {}, potion: {}, obstacle: {}}) => {
        this.startX = newX;
        this.startY = newY;
        this.startBlocks = newConfigs.startBlocks || 15;
        this.direction = newConfigs.direction || "r";
        this.firstSpeed = newConfigs.firstSpeed || 5;
        this.speed = this.firstSpeed;
        this.speedUp = 1;
        this.additionSpeed = newConfigs.additionSpeed || .25;
        this.keys = newConfigs.keys || ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
        this.blockWidth = newConfigs.blockWidth || 15;
        this.blockHeight = newConfigs.blockHeight || 15;
        this.headColor = newConfigs.headColor || "#ff5722";
        this.bodyColor = newConfigs.bodyColor || "#ff9800";
        /*****/
        this.foodWidth = newConfigs.food.width || 15;
        this.foodHeight = newConfigs.food.height || 15;
        this.foodGeneratorSpeed = 1000 / (newConfigs.food.generatorSpeed || 1 / 2) ;
        this.foodHideAfter = newConfigs.food.hideAfter || 4;
        this.scoreUnitValue = 1;
        this.foodTypes = newConfigs.food.types || [{
            name: "apple",
            src: "images/foods/apple.svg",
            soundSources: [["sounds/apple.mp3", "mpeg"], ["sounds/apple.wav", "wav"]],
            score: 1,
            percent: 60
        },
        {
            name: "goldenApple",
            src: "images/foods/goldenApple.svg",        
            soundSources: [["sounds/goldenApple.mp3", "mpeg"], ["sounds/goldenApple.wav", "wav"]],
            score: 3,
            percent: 10
        },
        {
            name: "wormApple",
            src: "images/foods/wormApple.svg",
            soundSources: [["sounds/wormApple.mp3", "mpeg"], ["sounds/wormApple.wav", "wav"]],
            score: -1,
            percent: 30
        }];
        /****/
        this.potionWidth = newConfigs.potion.width || 15;
        this.potionHeight = newConfigs.potion.height || 15;
        this.potionGeneratorSpeed = 1000 / (newConfigs.potion.generatorSpeed || 1 / 5) ;
        this.potionHideAfter = newConfigs.potion.hideAfter || 4;
        this.potionTypes = newConfigs.potion.types || [{
            name: "speedUpSmall",
            type: "SPEED",
            src: "images/potions/speedUpSmall.svg",
            soundSources: [["sounds/speedUpSmall.mp3", "mpeg"], ["sounds/speedUpSmall.wav", "wav"]],
            effect: () => 1.5,
            time: 20,
            percent: 40
        },
        {
            name: "speedDownSmall",
            type: "SPEED",
            src: "images/potions/speedDownSmall.svg",
            soundSources: [["sounds/speedDownSmall.mp3", "mpeg"], ["sounds/speedDownSmall.wav", "wav"]],
            effect: () => .5,
            time: 20,
            percent: 40
        },
        {
            name: "scorePowerSmall",
            type: "SCORE",
            src: "images/potions/scorePowerSmall.svg",
            soundSources: [["sounds/scorePowerSmall.mp3", "mpeg"], ["sounds/scorePowerSmall.wav", "wav"]],
            effect: () => 2,
            time: 30,
            percent: 20
        }];
        /****/
        this.obstacleWidth = newConfigs.obstacle.width || 15;
        this.obstacleHeight = newConfigs.obstacle.height || 15;
        this.obstacleColor = newConfigs.obstacle.color || "#403737";
        this.obstacleStroke = newConfigs.obstacle.stroke || "#000";
        /*****/
        this.goal = newGoal;
        this.time = newTime;
        /****/
        document.querySelector(".score").innerHTML = 0 + (this.goal != 0?" / " + this.goal:"");
        if(this.time == "infinity") {
            this.timeElement.innerHTML = "∞";
        } else {            
            this.timeElement.innerHTML =    `${Math.floor(this.time / 60) < 10?
                                                                (Math.floor(this.time / 60) < 1?
                                                                    "00":"0" + Math.floor(this.time / 60)):
                                                                (Math.floor(this.time / 60))}:
                                                            ${(this.time % 60 < 10? 
                                                                (this.time % 60 < 1)?
                                                                    "00":"0" + this.time % 60:
                                                                this.time % 60)}`;
        }
        snack.newLevel(this.startX, this.startY,
                        this.blockWidth, this.blockHeight, 
                        this.startBlocks, this.speed, this.direction, 
                        this.headColor, this.bodyColor);
        this.obstacles = [];
        
        if(newConfigs.obstacles) {
            newConfigs.obstacles.forEach(obstacle => {
                this.obstacles.push(new Obstacle(obstacle[0], obstacle[1], this.obstacleWidth, this.obstacleHeight, this.obstacleColor, this.obstacleStroke, obstacle[2]));
            });
        } 
        foods.newLevel(this.obstacles);
        potions.newLevel(this.obstacles);

        drankPotions = [];
        this.start(true);
    }
    this.start = (newLevel = false) => {

        this.turnOn = false;

        let startAfter = 5;
        
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = "#000000bb";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.font = "30px 'Noto Sans JP'";
        context.fillStyle = "#cccccc";
        context.textAlign = "center";
        context.fillText(startAfter, canvas.width / 2, canvas.height / 2);

        startAfter--;

        let timer = setInterval(() => {
                if(startAfter != 0) {
                    context.clearRect(0, 0, canvas.width, canvas.height);

                    context.fillStyle = "#000000bb";
                    context.fillRect(0, 0, canvas.width, canvas.height);
            
                    context.font = "30px 'Noto Sans JP'";
                    context.fillStyle = "#cccccc";
                    context.textAlign = "center";
                    context.fillText(startAfter, canvas.width / 2, canvas.height / 2);

                    startAfter--;
                } else {
                    clearInterval(timer);
                    this.turnOn = true;
                    if(!newLevel) {
                        this.move();
                        this.decreaseTime();
                        foods.addFoodSounds();
                        foods.addFoodImages();
                        foods.generateFood();
                        /***/
                        potions.addPotionSounds();
                        potions.addPotionImages();
                        potions.generatePotion();

                        potionsDecreaseTime();
                    } else {
                        this.turnAllOn();
                    }
                }
            }, 1000);

        
        if(!newLevel)
            document.addEventListener("keydown", switchDir);
    }
    this.stop = (msg, status = null) => {
        snack.stop();
        
        this.turnOn = false;
        foods.turnOn = false;
        potions.turnOn = false;

        context.fillStyle = "#000000bb";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.font = "30px 'Noto Sans JP'";
        context.fillStyle = "#cccccc";
        context.textAlign = "center";
        context.fillText(msg, canvas.width / 2, canvas.height / 2);

        if(status == "failed") {
            canvas.dispatchEvent(failedEvent);
        } else if (status == "won") {
            canvas.dispatchEvent(wonEvent);
        }

    }

}

let gameMode;

let startGame = (mode, difficulty = none, level = 0) => {
    let unitSize = 15;
    let scoreElement = document.querySelector(".score");
    let currentLevel = 1;

    gameMode = mode;

    if(mode == "normal") {
        let snackGame;

        let go = () => {
            let levelData = levels[currentLevel - 1];
    
            normalLevelMsgEle.classList.add("show");
            normalLevelMsgLevel.innerHTML = currentLevel;
    
            if(normalLevelMsgDifficulty.classList.contains("easy"))
                normalLevelMsgDifficulty.classList.remove("easy");
            if(normalLevelMsgDifficulty.classList.contains("medium"))
                normalLevelMsgDifficulty.classList.remove("medium");
            if(normalLevelMsgDifficulty.classList.contains("hard"))
                normalLevelMsgDifficulty.classList.remove("hard");
    
            let difficultyName;
            if(difficulty == 1)
                difficultyName = "easy";
            if(difficulty == 2)
                difficultyName = "medium";
            if(difficulty == 3)
                difficultyName = "hard";
    
            normalLevelMsgDifficulty.classList.add(difficultyName);
            normalLevelMsgDifficulty.innerHTML = difficultyName;
            normalLevelMsgGoal.innerHTML = levelData.difficulties[difficulty - 1].configs.goal;
    
            let minutes = (Math.floor(levelData.difficulties[difficulty - 1].configs.time / 60) < 10?
                            (Math.floor(levelData.difficulties[difficulty - 1].configs.time / 60) < 1?"00":"0" + Math.floor(levelData.difficulties[difficulty - 1].configs.time / 60)):
                            Math.floor(levelData.difficulties[difficulty - 1].configs.time / 60));
            let seconds = (Math.floor(levelData.difficulties[difficulty - 1].configs.time - (minutes * 60)) < 10?
                            (Math.floor(levelData.difficulties[difficulty - 1].configs.time - (minutes * 60)) < 1?"00":"0" + Math.floor(levelData.difficulties[difficulty - 1].configs.time - (minutes * 60))):
                            Math.floor(levelData.difficulties[difficulty - 1].configs.time - (minutes * 60)));
            normalLevelMsgTime.innerHTML = `${minutes}:${seconds}`;
    
            normalLevelMsgStartBtn.addEventListener("click", () => {
                normalLevelMsgEle.classList.remove("show");
                if(currentLevel == 1) {
                    snackGame = new SnackGame(levelData.x, levelData.y, levelData.difficulties[difficulty - 1].configs.time, levelData.difficulties[difficulty - 1].configs.goal, {
                        startBlocks: levelData.difficulties[difficulty - 1].configs.startBlocks,
                        firstSpeed: levelData.difficulties[difficulty - 1].configs.firstSpeed,
                        additionSpeed: levelData.difficulties[difficulty - 1].configs.additionSpeed,
                        direction: levelData.dir,
                        food: {
                            width: unitSize,
                            height: unitSize
                        },
                        obstacle: {
                            width: unitSize,
                            height: unitSize
                        },
                        potion: {
                            with: unitSize,
                            height: unitSize,
                        },
                        obstacles: levelData.obstacles,
                        blockWidth: unitSize,
                        blockHeight: unitSize
                    });
                    snackGame.start();
                } else {
                    snackGame.newLevel(levelData.x, levelData.y, levelData.difficulties[difficulty - 1].configs.time, levelData.difficulties[difficulty - 1].configs.goal, {
                            startBlocks: levelData.difficulties[difficulty - 1].configs.startBlocks,
                            firstSpeed: levelData.difficulties[difficulty - 1].configs.firstSpeed,
                            additionSpeed: levelData.difficulties[difficulty - 1].configs.additionSpeed,
                            direction: levelData.dir,
                            food: {
                                width: unitSize,
                                height: unitSize
                            },
                            obstacle: {
                                width: unitSize,
                                height: unitSize
                            },
                            potion: {
                                with: unitSize,
                                height: unitSize,
                            },
                            obstacles: levelData.obstacles,
                            blockWidth: unitSize,
                            blockHeight: unitSize
                        });
                    snackGame.start(true);
                }
                
                canvas.addEventListener("scoreChanged", () => {
                    scoreElement.textContent = snackGame.score;
                });
                
                let status = "on";
                document.onkeydown = (e) => {
                    if(e.key == "Enter") {
                
                        if(status == "on") {
                            if(snackGame.turnOn) {
                                e.preventDefault();
                                snackGame.stop(`Click "Enter" to continue`);
                                status = "off";
                            }
                        } else {
                                e.preventDefault();
                                snackGame.turnAllOn();
                            status = "on";
                        }
                    }
                }
        
            });
        }
        canvas.addEventListener("failed", () => {
            if(gameMode == "normal") {
                normalMsgLevel.setAttribute("data-val", `${currentLevel}-${levels.length}`);
                normalMsgDifficulty.setAttribute("data-val", difficulty);
                normalMsgWin.setAttribute("data-val", "lost");
                normalMsgEle.classList.add("show");
                normalMsgEleLevel.innerHTML = currentLevel + "/" + levels.length;
            }
        });
        canvas.addEventListener("won", () => {
            if(currentLevel == levels.length) {
                normalMsgLevel.setAttribute("data-val", `${currentLevel}-${levels.length}`);
                normalMsgDifficulty.setAttribute("data-val", difficulty);
                normalMsgWin.setAttribute("data-val", "won");
                normalMsgEle.classList.add("show");
                normalMsgText.innerHTML = `Congratulations!! <br />You won.`;
            } else {
                currentLevel++;
                go();
            }
        });
        go();
    } else if (mode == "infinity") {
        let levelData = levels[level - 1];

        let snackGame = new SnackGame(levelData.x, levelData.y, "infinity", 0, {
            startBlocks: levelData.difficulties[difficulty - 1].configs.startBlocks,
            firstSpeed: levelData.difficulties[difficulty - 1].configs.firstSpeed,
            additionSpeed: levelData.difficulties[difficulty - 1].configs.additionSpeed,
            direction: levelData.dir,
            food: {
                hideAfter: 5,
                width: unitSize,
                height: unitSize
            },
            obstacle: {
                width: unitSize,
                height: unitSize
            },
            potion: {
                with: unitSize,
                height: unitSize,
            },
            obstacles: levelData.obstacles,
            blockWidth: unitSize,
            blockHeight: unitSize
        });
        
        snackGame.start();
        canvas.addEventListener("scoreChanged", () => {
            scoreElement.textContent = snackGame.score;
        });
        
        let status = "on";
        document.onkeydown = (e) => {
            if(e.key == "Enter") {
        
                if(status == "on") {
                    if(snackGame.turnOn) {
                        e.preventDefault();
                        snackGame.stop(`Click "Enter" to continue`);
                        status = "off";
                    }
                } else {
                        e.preventDefault();
                        snackGame.turnAllOn();
                    status = "on";
                }
            }
        }

        canvas.addEventListener("failed", () => {
            if(gameMode == "infinity") {
                infinityMsgLevel.setAttribute("data-val", level);
                infinityMsgDifficulty.setAttribute("data-val", difficulty);
                infinityMsgScore.setAttribute("data-val", snackGame.score);
                infinityMsgEle.classList.add("show");
                infinityMsgEleScore.innerHTML = snackGame.score;
            }
        });

    } 
}
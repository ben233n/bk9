$(document).ready(function() {
    // 比賽場次資料模擬
    const matchData = {
        "2024_men": ["11/08 友誼賽 兒英系","10/15 友誼賽 社發系" ],
        "2024_women": [],
        "2025_men": [],
        "2025_women": []
    };

    const playerStats = {

        // name'球員姓名', aa'位置', bb'得分', cc'兩分命中', dd'兩分出手', ee'三分命中', ff'三分出手', gg'罰球命中', hh'籃板', ii'助攻', jj'抄截', kk'阻攻', ll'失誤', mm'犯規'
        "10/15 友誼賽 社發系": [
            { name: "03 簡執中",aa:'後衛',bb: 0,cc: 0, dd: 1,ee: 0, ff:4, gg:0, hh:1, ii:1, jj:0, kk:0, ll:1, mm:0 },
            { name: '05 徐睿謙', aa:'前鋒', bb:4, cc:2, dd:5, ee:0, ff:0,gg: 0, hh:2, ii:1, jj:1, kk:0, ll:2, mm:0  },
            { name: "06 許文慶", aa:'前鋒',bb:14,cc:4, dd:7, ee:2, ff:6, gg:0, hh:6, ii:1,  jj:1, kk:0, ll:2, mm:0},
            { name:"07 梁家祥", aa:'前鋒', bb:8,cc:2,  dd:4, ee:1, ff:2, gg:1, hh:6, ii:4,  jj:7, kk:0, ll:3, mm:1},
            { name:"98 楊曜丞", aa:'中鋒', bb:2,cc:0,  dd:4, ee:0, ff:0, gg:2, hh:11,ii: 0, jj:0, kk:0, ll:3, mm:1}
        ],
        "11/08 友誼賽 兒英系": [
            { name:'03 簡執中', aa:'後衛', bb:3,  cc:0, dd:0, ee:1, ff:2, gg:0, hh:2, ii:3, jj:1, kk:0, ll:2, mm:1},
            { name:'05 徐睿謙', aa:'前鋒', bb:3,  cc:1, dd:2, ee:0, ff:0, gg:1, hh:2, ii:0, jj:0, kk:0, ll:2, mm:0},
            { name:'06 許文慶', aa:'前鋒', bb:8,  cc:4, dd:7, ee:2, ff:6, gg:0, hh:6, ii:1, jj:1, kk:0, ll:2, mm:0},
            { name:'07 梁家祥', aa:'前鋒', bb:14, cc: 7,dd: 7,ee: 0,ff: 0,gg: 0,hh: 5,ii: 1,jj: 0,kk: 1,ll: 1,mm: 0},
            { name:'15 呂修逸', aa:'中鋒', bb:13, cc: 5,dd: 7,ee: 0,ff: 2,gg: 3,hh: 3,ii: 1,jj: 0,kk: 1,ll: 1,mm: 0},
            { name:'22 林萬歲', aa:'後衛', bb:8,  cc:3, dd:3, ee:0, ff:3, gg:2, hh:3, ii:3, jj:1, kk:0, ll:1, mm:1},
            { name:'27 邱俊瑋', aa:'前鋒', bb:0,  cc:0, dd:2, ee:0, ff:0, gg:0, hh:4, ii:0, jj:0, kk:1, ll:1, mm:0},
            { name:'87 黃塏峻', aa:'後衛', bb:8,  cc:1, dd:4, ee:2, ff:4, gg:0, hh:3, ii:0, jj:0, kk:0, ll:1, mm:0}
        ]
        // 更多場次資料
    };

    // 動態更新比賽場次選項
    $('#season, #team').on('change', function() {
        const season = $('#season').val();
        const team = $('#team').val();
        const key = `${season}_${team}`;

        if (matchData[key]) {
            $('#match').empty().append('<option value="">請選擇比賽場次</option>');
            matchData[key].forEach(match => {
                $('#match').append(`<option value="${match}">${match}</option>`);
            });
            $('#match').prop('disabled', false);
        } else {
            $('#match').empty().append('<option value="">請選擇比賽場次</option>').prop('disabled', true);
        }

        toggleSubmitButton();
    });

    // 檢查是否啟用查詢按鈕
    $('#match').on('change', toggleSubmitButton);

    function toggleSubmitButton() {
        const season = $('#season').val();
        const team = $('#team').val();
        const match = $('#match').val();

        $('#submit').prop('disabled', !(season && team && match));
    }

    // 查詢數據並顯示表格
    $('#submit').on('click', function() {
        const match = $('#match').val();
        const stats = playerStats[match] || [];

        const tbody = $('#player-data tbody');
        tbody.empty();

        stats.forEach(player => {
            tbody.append(`
                <tr>
                    <td class="sticky-column">${player.name}</td>
                    <td class="main_c">${player.aa}</td>
                    <td class="main_c">${player.bb}</td>    
                    <td class="main_c">${player.cc}</td>
                    <td class="main_c">${player.dd}</td>  
                    <td class="main_c">${player.ee}</td>
                    <td class="main_c">${player.ff}</td>  
                    <td class="main_c">${player.gg}</td>
                    <td class="main_c">${player.hh}</td>  
                    <td class="main_c">${player.ii}</td>
                    <td class="main_c">${player.jj}</td>  
                    <td class="main_c">${player.kk}</td>
                    <td class="main_c">${player.ll}</td>      
                    <td class="main_c">${player.mm}</td>               
                </tr>
            `);
        });
    });
});
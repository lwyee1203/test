//下拉式選單
$(function(){
	$('.submit').click(function(){
		$('.slider-img').hide();
		$('.areaSelect').show();
		$('.frontPage').show();

//json檔
var data =
[
  {
    "PublicArt_INDEX": "a72f5ace-54f4-4c15-b8fc-112304983ab2",
    "PublicArt_Name": "非金剛群",
    "PublicArt_Author": "劉柏村",
    "PublicArt_Year": "2012",
    "PublicArt_Size": "長 180 cm、寬 180 cm、高 300 cm\r\n直徑  cm、厚  cm、面積  m2",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鋼鐵",
    "PublicArt_Place": "高雄市鹽埕區大勇路1號",
    "PublicArt_Funds": "2000000",
    "PublicArt_Unit": "高雄市政府文化局駁二營運中心",
    "PublicArt_Method": "指定價購",
    "PublicArt_ActTeam": "郭添貴、翁英惠、盧明德、洪明宏、曾媚珍、梁任宏、王家祥",
    "PublicArt_SelectTeam": "郭添貴、翁英惠、洪明宏、曾媚珍、梁任宏、王家祥、邱秋德",
    "PublicArt_Desc": "非金剛群像男女形態各分八座，每座由兩片同一形態依十字形築構而成。作品形式是由線條所框架的外在圖像，與其說其內為虛，不如說其形象界定或框住空間，讓邊線在真實空間產生意義。非金剛圖像指的不是認知的金剛體，而是是似而非，亦或帶有虛空表徵的意義指涉？",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803104149190.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "714aa7d9-a56e-4869-9793-159527554b01",
    "PublicArt_Name": "微米間的巨大進化",
    "PublicArt_Author": "丁水泉",
    "PublicArt_Year": "2012",
    "PublicArt_Size": "(長)公分\t490\r\n(寬)公分\t250\r\n(高)公分\t360",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼、陶、玻璃",
    "PublicArt_Place": "高雄市燕巢區深中路62號",
    "PublicArt_Funds": "78萬",
    "PublicArt_Unit": "國立高雄師範大學",
    "PublicArt_Method": "",
    "PublicArt_ActTeam": "1.李億勳委員    2.江文鉅委員    3.陳士賢委員   4.林熹俊委員\r\n5.蘇志徹委員   6.許一男委員     7.大宇建築師事務所(黃有良先生)",
    "PublicArt_SelectTeam": "1.戴嘉南委員   2.李億勳委員   3.林熹俊委員   4.許自貴委員\r\n5.許一男委員   6.陳雪妮委員   7.吳旭峰委員",
    "PublicArt_Desc": "生物科技的研究，可以從微生物起，也能從毫髮間進行，而鏡頭底下的微米世界正是真菌、分子結構與DNA能眼見的境界。藝術設置「微米間的巨大進化」之創作，正如字面上，將生物科技研究從微小事物中探索生命密碼，進而研究、改造進化的精神。巨大化的體現，將這顯微鏡下的世界、甚至只能用數據表現的圖表，具體化的帶入人們的眼界之中，讓觀者理解生物的活動與進化，正時刻不斷的在肉眼不可及之處進行著，不管是眼見的一草一木或是肉眼不可辨識之物，都是造物者留下的密碼，等著被探索、解讀。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803111715178.JPG"
    ]
  },
  {
    "PublicArt_INDEX": "b5de08d3-c854-4bbc-b73e-4ec24d865b23",
    "PublicArt_Name": "葉影",
    "PublicArt_Author": "劉柏村",
    "PublicArt_Year": "2012",
    "PublicArt_Size": "長 50 cm、寬 70 cm、高 235 cm\r\n直徑  cm、厚  cm、面積  m2",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鋼鐵",
    "PublicArt_Place": "高雄市鹽埕區大勇路1號",
    "PublicArt_Funds": "600000",
    "PublicArt_Unit": "高雄市政府文化局駁二營運中心",
    "PublicArt_Method": "",
    "PublicArt_ActTeam": "郭添貴、翁英惠、盧明德、洪明宏、曾媚珍、梁任宏、王家祥",
    "PublicArt_SelectTeam": "郭添貴、翁英惠、洪明宏、曾媚珍、梁任宏、王家祥、邱秋德",
    "PublicArt_Desc": "在五公分厚鐵鈑上，利用氧乙炔火焰切割及穿透的力量，描繪葉子內在之葉脈組織特徵，重新檢視葉子在形態與空間的對話性。作品依複製原理，製作五只葉片，其中一只僅為外輪廓，是透空虛化的造形，以對比其它，形成在複製的過程中同一性之差異概念，同時整體也在這虛實的架構中，加速與空間的對話連結。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803104447393.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a1d6e12d-db70-4cea-9e8b-7703d2844656",
    "PublicArt_Name": "側影",
    "PublicArt_Author": "劉柏村",
    "PublicArt_Year": "2012",
    "PublicArt_Size": "長 300 cm、寬 300 cm、高 210 cm\r\n直徑  cm、厚  cm、面積  m2",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鋼鐵",
    "PublicArt_Place": "高雄市鹽埕區大勇路1號",
    "PublicArt_Funds": "200000",
    "PublicArt_Unit": "高雄市政府文化局駁二營運中心",
    "PublicArt_Method": "指定價購",
    "PublicArt_ActTeam": "郭添貴、翁英惠、盧明德、洪明宏、曾媚珍、梁任宏、王家祥",
    "PublicArt_SelectTeam": "郭添貴、翁英惠、洪明宏、曾媚珍、梁任宏、王家祥、邱秋德",
    "PublicArt_Desc": "由外而內在面鈑上裁切出六道線條，每道線條寬度略約一致，從而分離出六個同一性，不同大小之側面輪廓線，為加強線條及材質的力量，亦試圖藉由強大的火焰燒烤軟化材質的物理性結構，同時間藉由工具的運作，使其原有的平版性線條，在瞬間中扭曲、翻轉、變形。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803104319128.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "eff9715b-3159-4c70-93d5-a55f04bda329",
    "PublicArt_Name": "包容",
    "PublicArt_Author": "張子隆",
    "PublicArt_Year": "2012",
    "PublicArt_Size": "長 160 cm、寬 160 cm、高 100 cm\r\n直徑  cm、厚  cm、面積  m2",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鋼鐵",
    "PublicArt_Place": "高雄市鹽埕區大勇路1號",
    "PublicArt_Funds": "1180000",
    "PublicArt_Unit": "高雄市政府文化局駁二營運中心",
    "PublicArt_Method": "指定價購",
    "PublicArt_ActTeam": "郭添貴、翁英惠、盧明德、洪明宏、曾媚珍、梁任宏、王家祥",
    "PublicArt_SelectTeam": "郭添貴、翁英惠、洪明宏、曾媚珍、梁任宏、王家祥、邱秋德",
    "PublicArt_Desc": "「包容」這名稱是作者看到這塊尚只是在廢料堆中的廢料時的第一印象，以加、減、整形、化妝的技法，改變它、讓它脫離廢料屬性，轉化成為創作材料。經由時間的投入，在創作的過程中，它被植入應有的造型語彙，傳達對當下社會亂象的不滿，希望社會有更多的包容。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803103838134.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "59a6bdc4-ebd7-4072-8803-db1e52aeea98",
    "PublicArt_Name": "花影",
    "PublicArt_Author": "劉柏村",
    "PublicArt_Year": "2012",
    "PublicArt_Size": "長 140 cm、寬 160 cm、高 235 cm\r\n直徑  cm、厚  cm、面積  m2",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鋼鐵",
    "PublicArt_Place": "高雄市鹽埕區大勇路1號",
    "PublicArt_Funds": "350000",
    "PublicArt_Unit": "高雄市政府文化局駁二營運中心",
    "PublicArt_Method": "指定價購",
    "PublicArt_ActTeam": "郭添貴、翁英惠、盧明德、洪明宏、曾媚珍、梁任宏、王家祥",
    "PublicArt_SelectTeam": "郭添貴、翁英惠、洪明宏、曾媚珍、梁任宏、王家祥、邱秋德",
    "PublicArt_Desc": "以圓心為中心點，藉由被機械絞碎的片段鐵塊，向外排列組合為環圓形狀，再用鋼材弧線構成其外圍形狀，表現相應的排列方式、輪數等花瓣圖形，整體構成出花朵的概要形狀。花是美麗的象徵，被轉換形構於鋼鐵的文化材料中，自然、人文、工業的符號系統，共同架構出一種屬於當下生活之文化的索引思考。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803104032220.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "50e164ba-581f-4263-9ed7-a5cd78846854",
    "PublicArt_Name": "海潮記憶(一)(二)",
    "PublicArt_Author": "丁水泉",
    "PublicArt_Year": "2011",
    "PublicArt_Size": "200X420X1200CM\r\n50X75X150CM\r\n45X65X130CM",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、陶、玻璃",
    "PublicArt_Place": "高雄市前鎮區明鳳七街1號",
    "PublicArt_Funds": "320萬",
    "PublicArt_Unit": "高雄市紅毛港國小",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "張宏仁、何明泉、林大維、洪顯超、林永發、劉木賢、蘇連陣",
    "PublicArt_SelectTeam": "張宏仁、劉木賢、林大維、蘇連陣、許有麟、洪根深、林崇宏、簡源忠、陳燕如",
    "PublicArt_Desc": "海潮記憶(一)\r\n貝殼訴說海洋的記憶，將紅毛港的記憶緊緊包覆其中，拾起貝殼覆耳聆聽，彷彿聽見那遠久的美好回憶隨著浪濤敲打心房，恰如總是站在堤岸細數浪花的過往般，將土地的根深植我心。\r\n\r\n海潮記憶(二)\r\n紅毛港，一個被大海溫柔擁抱的美麗聚落，幾經興盛的輝煌年代，文明伴隨著浪濤聲成長，今時的舉村遷徙，遷不走深植人心的海潮聲。轉動記憶的羅盤，細細回憶那美麗的樂園。",
    "PublicArt_Image": null
  },
  {
    "PublicArt_INDEX": "eebd4426-aca3-4f04-aff3-a2c923fc7ed9",
    "PublicArt_Name": "佈局",
    "PublicArt_Author": "江政恭",
    "PublicArt_Year": "2011",
    "PublicArt_Size": "長 2200 cm、寬 2100 cm、高  cm\r\n直徑  cm、厚  cm、面積  m2",
    "PublicArt_Type": "石材 - 磚",
    "PublicArt_Material": "清水磚及合成石等組合",
    "PublicArt_Place": "高雄市三民區建工路419號 高雄市立高雄高級工業職業學校教學區中庭",
    "PublicArt_Funds": "1671000",
    "PublicArt_Unit": "高雄市立高雄高級工業職業學校",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "陳雪妮、林淑梅、吳旭峰、林建宇、吳叁鏡、連薏菁",
    "PublicArt_SelectTeam": "陳雪妮、林淑梅、吳旭峰、黃郁生、林建宇、吳叁鏡、連薏菁",
    "PublicArt_Desc": "人生如棋，但是人世間並不只侷限在19×19的方格線棋盤當中，而是一個沒有邊界、有大有小、有高有低充滿無限可能的世界，這個藝術場域不只提供學生視覺美感與休憩場地之外，盼能啟發學生思索未來的人生佈局，今日你以雄工為榮，明日雄工以你為榮。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120801145025839.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "d67b2e5b-77b0-4806-b174-6c0721029d84",
    "PublicArt_Name": "洞天福地讀書樂",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2011",
    "PublicArt_Size": "1050X520X350cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、鋼筋、混凝土、馬賽克鑲嵌、預鑄水泥管",
    "PublicArt_Place": "高雄市楠梓區加昌路910號",
    "PublicArt_Funds": "1196000",
    "PublicArt_Unit": "高雄市右昌國小",
    "PublicArt_Method": "",
    "PublicArt_ActTeam": "方淑娟、張強、吳梅嵩、許一男、吳旭峰、蕭瓊瑞、陳俐君",
    "PublicArt_SelectTeam": "方淑娟、、陳菁萍、吳梅嵩、許一男、吳旭峰、蕭瓊瑞、陳俐君、蘇志徹",
    "PublicArt_Desc": "本作品以傳統常見之文化元素為主題，將「葫蘆」與「獅子」的造型結合而成，將作品融入民俗文化元素，希望將傳統文化賦予新的詮釋。\r\n\r\n「葫蘆」與「福祿」音相近，屬瓜藤類，有「瓜瓞絲延」之寓意，亦有吉祥之象徵，葫蘆形狀的沙坑，就形同此地為福地一般，可讓學童在此玩耍、活動，而大小獅子意欲「太師少師」，有著教育傳承與功名祿位之吉祥意義，喜愛閱讀的小獅象徵著學校學生之知識學習。作品底座下有孔洞設置，讓學童可以擁有如祕密基地的小天地，能在遊戲空間中添增趣味。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803102327482.bmp"
    ]
  },
  {
    "PublicArt_INDEX": "c27b565f-7eb0-4ab4-9b92-553614fda9fc",
    "PublicArt_Name": "英雄",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2011",
    "PublicArt_Size": "1.\t英雄無畏：\r\n自然生態 400×180×70 cm  \r\n歷史人文 400×200×70 cm  \r\n軍隊印象 400×230×70 cm\r\n2. 火牛先鋒：820cm x 400 x 500 cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "馬賽克磁磚、不鏽鋼",
    "PublicArt_Place": "高雄市左營區先鋒路9號",
    "PublicArt_Funds": "2,300,000",
    "PublicArt_Unit": "海軍陸戰隊指揮部",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "1. 余至懋 上校 陸戰隊指揮部副參謀長\r\n2. 陳焜山 上校 \r\n3. 蔡雅文 工程設計師\r\n4. 陳雪妮 主任\r\n5. 蘇志徹 教授\r\n6. 陳明輝 教授\r\n7. 洪明宏 教授\r\n8. 許一男 委員",
    "PublicArt_SelectTeam": "1. 余至懋 上校 \r\n2. 彭兆鳳 上校\r\n3. 陳焜山 上校\r\n4. 郭小菁 委員 \r\n5. 陳明輝 委員\r\n6. 洪明宏 委員\r\n7. 張栢烟 委員",
    "PublicArt_Desc": "1.\t英雄無畏：\r\n本作品以「登陸戰車」造型發想，簡化轉換為梭狀塊體，以三為群，組合成高低錯落有秩之配置，意寓陸戰隊弟兄搶灘登陸的無畏精神，運用海軍陸戰隊軍服特殊「迷彩」色彩，搭配左營當地歷史人文、自然生態及軍隊印象等主題圖像，轉化成具意義之迷彩圖案，登陸戰車賦予在地文化意涵，為兼具人文藝術與陸戰隊特色的公共藝術作品。\r\n\r\n\r\n2.\t火牛先鋒：\r\n本作品主體以火牛的尖銳牛角為發想，整體造型優美流暢，如鋒銳之兵刃，除意寓本營區軍隊精良，且具有深謀遠慮的作戰策略；火焰圖案表現勇敢無畏、衝鋒陷陣精神，以不怕死的勇氣為作戰之第一線，猛衝突破敵軍的搶灘勇士。此外，作品呈現「V」字形姿態，具有勝利涵義，以此宣示各項光榮戰績，圓滿達成任務與建軍殊榮。作品底部利用不鏽鋼鏡射圖案效果，與舖面火焰圖案相呼應結合，將作品與舖面融為一體。形成熊熊火焰的視覺效果做為火牛指示記號與部隊精神象徵 。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803112538280.JPG",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803112537640.JPG"
    ]
  },
  {
    "PublicArt_INDEX": "99df6ce2-d5ab-419f-81c4-6b1083a41ae1",
    "PublicArt_Name": "巡‧界",
    "PublicArt_Author": "吳孟璋",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "作品：150 × 100 × 70cm、130 × 100 × 70cm、140 × 110 × 60cm、120 × 100 × 60cm、120 × 80 × 130cm、120 × 90 × 60cm、110 × 90 × 90cm 基座：152 × 122 × 20cm、176 × 128 × 20cm、320 × 180 × 20cm、175 × 138 × 20cm、340 × 140 × 20cm、90",
    "PublicArt_Type": "石材 - 水泥",
    "PublicArt_Material": "作品：石材、LED燈\r\n基座：水泥、馬賽克、抿石子",
    "PublicArt_Place": "高雄市茄萣區正遠路1號 海岸巡防總局南部地區巡防局",
    "PublicArt_Funds": "190萬元",
    "PublicArt_Unit": "海岸巡防總局南部地區巡防局",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "郭憲武、莊根水、楊瑞禎、蘇志徹、盧福壽、洪明宏、蔡獻友",
    "PublicArt_SelectTeam": "郭憲武、莊根水、楊瑞禎、蘇志徹、盧福壽、洪明宏、蔡獻友",
    "PublicArt_Desc": "以海岸巡防局的巡守、護衛精神為設計的主題構想，作品表現海上執法的嚴正周密，與職責任務中巡行防護、服務指引的堅毅、奉獻性格。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704194119194.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "d6aabaf4-d9f6-4faf-91ba-91c0fbf2d793",
    "PublicArt_Name": "抽絲剝繭之眼",
    "PublicArt_Author": "黃裕榮、駱信昌、林足秋",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "高 900 cm、寬 480 cm、深 330 cm、\r\n外直徑 60 mm、管壁厚度 3 mm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、大理石",
    "PublicArt_Place": "高雄市前金區成功一路428號",
    "PublicArt_Funds": "3,010,000",
    "PublicArt_Unit": "法務部調查局高雄市調查處",
    "PublicArt_Method": "",
    "PublicArt_ActTeam": "楊清敏、張惠蘭、高燦榮、陳水財、陳建北、張行道、高世銘",
    "PublicArt_SelectTeam": "楊清敏、張惠蘭、高燦榮、陳水財、陳建北、郭瑞坤、方惠光、張行道、高世銘",
    "PublicArt_Desc": "作品以帶有絲狀意象的金屬管進行手感編織，於大地上創作出抽絲剝繭的戲劇性張力，表達調查局處理事情由外表膚淺之處，逐漸引入內在的深境意涵。\r\n當中，逐漸明朗破繭而出的眼睛像是署光乍現，呼應著調查局抽絲剝繭、明察秋毫的精神。手法上採用鋼鐵文化創作，適度回應高雄港都的在地文化產業特色。由於以線條構成，穿透性夠，受風壓影響小，不怕強風，也不會造成壓迫感，符合公共藝術的公共安全性。作品雖然大，但重量與視覺都輕盈，這樣的量體下，遠遠就能看見這件作品，可輕易傳達調查局入口意象與公共藝術的公共性。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803112954510.JPG"
    ]
  },
  {
    "PublicArt_INDEX": "e383dec9-11f4-4d9d-bda7-097dcb9d71df",
    "PublicArt_Name": "迷漾水光",
    "PublicArt_Author": "黃志偉",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "720 × 80 × 360cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼鍛造、LED數位演燈系統",
    "PublicArt_Place": "高雄市鳳山區輜汽路281號 衛武營都會公園",
    "PublicArt_Funds": "620（P204-P206，3件組）萬元",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林倩綺、陳書芸、翁佳樑、李憶勳、許自貴、陳燕如、洪根深、林同華",
    "PublicArt_SelectTeam": "林倩綺、顧世勇、涂明達、許自貴、陳燕如、洪根深、林同華",
    "PublicArt_Desc": "「迷漾水光」一作，其構思源自於衛武營都會公園以「迷彩」作為空間層次的結構概念作為發想，並以「水＝迷彩＝光」的物質相融同質性想像，來做為本作品的主體構成意象。迷彩在衛武營有著歷史記憶的本質，迷彩的遮蔽性、掩飾性與保護性弁遄A與水、光的物質多變性有著異曲同工之妙，將三者滲融為一，因而創造設計出湧泉造形，使其具備著藝術性與歷史情感記憶以及新時代健康城市都會公園生態景觀。 「迷漾水光」如同由地底湧出的水資源一般，設置於記憶活化區之人工湖畔，光亮如鏡的不鏽鋼湧泉，構築出一道彩虹般的拱形反映著湖光風貌，日夜交替出幻化無限的迷彩，強調出衛武營都會公園中的生態主軸意涵，喚醒過去時光記憶並創造出在地的現在與未來的生活共同情感。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704193355143.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "87db0036-1992-48d1-ad43-1113288f8280",
    "PublicArt_Name": "旭日東昇",
    "PublicArt_Author": "江政恭",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "作品：125 × 75 × 360cm 基座：75 × 75 × 125cm",
    "PublicArt_Type": "玻璃 - 玻璃纖維",
    "PublicArt_Material": "玻璃纖維，水泥基座",
    "PublicArt_Place": "高雄市前鎮區中山三路45號 獅甲國民小學",
    "PublicArt_Funds": "47.13萬元",
    "PublicArt_Unit": "高雄市獅甲國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭瑞坤、盧明德、林右正、高燦榮、曾振興、趙建銘、許英毅",
    "PublicArt_SelectTeam": "郭瑞坤、盧明德、林右正、高燦榮、曾振興、趙建銘、許英毅、蘇志徹、蕭木川",
    "PublicArt_Desc": "以太陽與眼睛作為創作元素。小朋友在人生旅途上，如同破曉時分剛升起的太陽綻放出萬丈光芒般，展現自己的藝能，面對未來充滿著無限希望，也要有大眼睛高瞻遠矚的眼光與志向，以呼應學校邁向「獅夢飛揚‧心校園」的校園規劃校舍改建之目標，迎向第二個甲子年",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704193459591.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "02f07c8d-4003-4c6c-a211-0229a83d1cb0",
    "PublicArt_Name": "樂之森—神奇的魔法之旅",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "提琴怪精靈：95 × 100 × 150cm 喇叭怪精靈：100 × 95 × 150cm 發條精靈：75 × 85 × 150cm DO RE MI精靈：75 × 115 × 150cm 毛毛怪精靈：95 × 85 × 155cm 樂符機靈：60 × 50 × 155cm（2件）、60 × 150 × 155cm 魔法兔：85 × 40 × 35cm 跳跳鼠：110 × 30 × 6 (單位:公分)",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "作品：混凝土、馬賽克鑲嵌 基座：水泥、洗石子",
    "PublicArt_Place": "高雄市苓雅區青年一路103號 四維國民小學",
    "PublicArt_Funds": "145萬元",
    "PublicArt_Unit": "高雄市苓雅區四維國民小學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "陳雪妮、吳旭峰、蘇志徹、張碼龍、林熺俊、陳兆華、呂淑屏",
    "PublicArt_SelectTeam": "呂淑屏、羅賢昌、許自貴、蘇志徹、吳旭峰",
    "PublicArt_Desc": "1.音樂與造型的感情體驗 音樂與造型都是一種善於表現和激發感情的藝術。四維國小的合唱團、直笛團及管弦樂團在音樂上傑出的表現成就，保持一貫的優良傳統，為高雄市及至全國眾所皆知。本案創作即是將音樂符號與藝術造型結合在一起，規劃以學童為主，與社區共享的公共藝術座椅。 2.擬人化故事的視知覺體驗 轉換成人的視覺角度，尊重學童的視覺表達，把學童從再現和複製自然中解放出來。「樂之森」裏的神奇精靈以擬人化的故事情節讓兒童發揮感官能力，依靠直觀的視覺與知覺，為學童創造一個自由表達、自由聯想的藝術場域。 3.音樂與神奇精靈的想像體驗 在聆賞音樂或藝術欣賞的過程中都必須透過想像與聯想的能力，能把對生活、生命的感受表達出來。結合音樂 的符號，以造型說故事的神奇精靈即將在維仁街上的綠色森林裏，展現魔法，將邀請經過的民眾與學童騎上神奇的精靈座椅，展開一連串的探索與想像。 4.故事情節 在遙遠的綠色森林裏，住著３隻可愛的神奇動物：變變龍、跳跳鼠、魔法兔。他們長期守護著森林旁的魔法學校，有一天，他們在矮牆上巡視著學校，忽然間，跳跳鼠與魔法兔很緊張的衝向綠色森林…而發條精靈與DO RE MI精靈也開始播放著音樂，喇叭怪精靈、毛毛怪精靈、樂符精靈也動了起來，有人闖入了學校…",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704193136002.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3a766f88-ddfa-4bf6-8c02-06d6a545e2fb",
    "PublicArt_Name": "規矩做人",
    "PublicArt_Author": "江政恭",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "作品：50 × 150 × 360cm 基座：200 × 200 × 50cm (單位:公分)",
    "PublicArt_Type": "玻璃 - 玻璃纖維",
    "PublicArt_Material": "作品：玻璃纖維，水泥基座",
    "PublicArt_Place": "高雄市前鎮區中山三路45號 獅甲國民小學",
    "PublicArt_Funds": "42.3萬元",
    "PublicArt_Unit": "高雄市獅甲國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭瑞坤、盧明德、林右正、高燦榮、曾振興、趙建銘、許英毅",
    "PublicArt_SelectTeam": "郭瑞坤、盧明德、林右正、高燦榮、曾振興、趙建銘、許英毅、蘇志徹、蕭木川",
    "PublicArt_Desc": "以圓規和直尺為架構，塑造一個活潑可愛芭蕾舞者的機器人造型，立在日晷的圓形台座上，敘述獅甲國小探索科技、培育創思的方針。大肚子造型詮釋學校如同母親般的孕育學子。『矩為方、規為圓』。不以規矩難成方圓，作品隱含『規矩做人』的道理，以呼應學校校本課程的「人文心」、「科技園」教育目標。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704193211367.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "07612699-d34c-4def-8b7c-0b7d5a4cdd95",
    "PublicArt_Name": "大地之躍",
    "PublicArt_Author": "陳信朗",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "作品：1600 × 900cm 基座：1600 × 900 × 2400cm",
    "PublicArt_Type": "陶瓷 - 陶板",
    "PublicArt_Material": "玻璃彩色膠膜、陶板",
    "PublicArt_Place": "高雄市岡山區柳橋東路36號",
    "PublicArt_Funds": "85.7萬",
    "PublicArt_Unit": "高雄市岡山國民小學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "陳信朗、趙秀玲、王燕琨、蘇天財、駱順德",
    "PublicArt_SelectTeam": "蔡獻友、蘇志徹、楊裕隆",
    "PublicArt_Desc": "本作品以大小岡山自然景觀為主要發想，提倡愛自然、愛土地之概念。 以大小陶板浮雕作韻律的裝置，表現岡山國小最具代表的舞蹈教育成就。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704193313351.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "739ad928-151a-4bc8-991a-2bd0dd34680d",
    "PublicArt_Name": "臺灣情",
    "PublicArt_Author": "陳信朗",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "作品：30 × 30 × 2cm（36件） 基座：310 × 310 × 15cm",
    "PublicArt_Type": "陶瓷 - 陶板",
    "PublicArt_Material": "陶板",
    "PublicArt_Place": "高雄市岡山區柳橋東路36號",
    "PublicArt_Funds": "85.7（P198-P200，3件組）",
    "PublicArt_Unit": "高雄市岡山國民小學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "陳信朗、趙秀玲、王燕琨、蘇天財、駱順德",
    "PublicArt_SelectTeam": "蔡獻友、蘇志徹、楊裕隆",
    "PublicArt_Desc": "以臺灣舊有縣及岡山鄰近的鄉，將其代表性的景物以浮雕陶板呈現，作品除了為美化校園及周邊景觀，期盼能夠營造出愛鄉土的情懷。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704193547529.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "c1358e60-13e3-4166-a1df-2e52970b6c2b",
    "PublicArt_Name": "四方匯聚",
    "PublicArt_Author": "林維俞",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "800 × 150 × 350cm",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "\"鋼鐵、水泥 Iron, concrete \"",
    "PublicArt_Place": "高雄市前鎮區鎮中路132號",
    "PublicArt_Funds": "121.9（P192-P193，2件組）",
    "PublicArt_Unit": "高雄市立前鎮高級中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "洪根深、李億勳、林右正、陳雪妮、王漢瑞、陳志達、吳承儒",
    "PublicArt_SelectTeam": "文斌、洪明宏、李億勳、陳水財、林大維、林右正",
    "PublicArt_Desc": "作品以四大元素代表本區聚集發展繁榮之資本，分別為科技、工業、漁業、商業，除闡揚前鎮發展之重要意涵外，亦搭配造街工程進行，以風、火、水、土四大元素發想，用創意簡化的造形元素，搭配複合材料，期望藉此結合前鎮的文化背景與未來發展，提供具藝術、創意與具教育意",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704193623162.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8ef286a1-853d-4975-9634-2f8ad9010a3a",
    "PublicArt_Name": "種子",
    "PublicArt_Author": "黃靖湄",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "770 × 600 × 800cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "漂流木、不鏽鋼管、塗料上色",
    "PublicArt_Place": "高雄市小港區龍鳳路559號",
    "PublicArt_Funds": "71.3萬元",
    "PublicArt_Unit": "高雄市立鳳林國民中學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "羅慶璋、劉木賢、陳雪妮、林右正、林大維",
    "PublicArt_SelectTeam": "劉木賢、許有麟、許自貴、林大維、林右正",
    "PublicArt_Desc": "種子需要陽光、需要水，需要被灌溉、滋養才能日漸茁壯！ 學校就是太陽，知識就是養分，孩子們便是一顆顆期待滋養茁壯的種子們！ 知識是傳承的，如同種子茁壯之後會深根、會拓展，但不管到任何地方，彼此的關聯會永遠緊緊相扣。期望鳳林的孩子們都能擁有大海之子的精神，無論飛翔到哪裡都能落地深根，堅毅成長。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120801143957097.bmp"
    ]
  },
  {
    "PublicArt_INDEX": "96e4501d-5bae-45ef-ac65-309dfd1a161d",
    "PublicArt_Name": "初芽",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "立體作品：25 × 300 × 80cm 平面壁畫：250 × 360cm",
    "PublicArt_Type": "陶瓷 - 瓷磚",
    "PublicArt_Material": "磁磚、不鏽鋼 Tiles, Steel Plate",
    "PublicArt_Place": "高雄市燕巢區大學路1號 國立高雄第一科技大學",
    "PublicArt_Funds": "42萬元",
    "PublicArt_Unit": "國立高雄第一科技大學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "歐淑慧、張朝順、黃冠華、吳守哲、謝佩霓、蘇志徹、許自貴",
    "PublicArt_SelectTeam": "歐淑慧、張朝順、黃冠華、吳守哲、謝佩霓、蘇志徹",
    "PublicArt_Desc": "作品以「芽」來比喻學習者成長的狀態，整體作品以流暢的造型，表現生命力與挑戰性的生長過程；每個人心中都擁有智慧的種子，經啟發後將不斷的生長。芽在大地裂縫中以「新芽初萌」的姿態，表達著掙脫成見與困境，跨出象牙塔與勇於嘗試新的學習之意象。以嶄新的心，吸取多元的知識，藉由學習與經驗的累積成長，就像種子經由發芽之過程，在時間中不斷茁壯。 作品分為立體與平面馬賽克鑲嵌部分，立在廣場上的立體作品呼應著牆面上的平面圖像，帶來空間延伸與視覺變化，表達更精進的學習發展。藉由平面與立體作品之對話，象徵由學校基礎教育延伸至終身教育。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704193944455.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "76f29da2-e9c8-410d-af69-30f7a94538be",
    "PublicArt_Name": "神龍擺尾",
    "PublicArt_Author": "梁任宏",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "作品：570 × 800cm、直徑Diameter 400cm、基座：400 × 12cm、直徑Diameter 400cm (單位:公分)",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "作品：不鏽鋼\r\n基座：水泥、石材",
    "PublicArt_Place": "高雄市茄萣區正遠路1號 海岸巡防總局南部地區巡防局",
    "PublicArt_Funds": "190萬元",
    "PublicArt_Unit": "海岸巡防總局南部地區巡防局",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "郭憲武、莊根水、楊瑞禎、蘇志徹、盧福壽、洪明宏、蔡獻友",
    "PublicArt_SelectTeam": "郭憲武、莊根水、楊瑞禎、蘇志徹、盧福壽、洪明宏、蔡獻友",
    "PublicArt_Desc": "「神龍禮嚏v出自易經中的「履」卦，神未F害之至，敵人聞之莫不喪膽。海中神龍是海巡人員正義的化身，本著海域執法、海事服務、海洋事務等海巡三大核心任務的精神為民服務，是文武雙全，海陸兩棲的人民保母。 「神龍禮嚏v作品型式為動態雕塑，動能來自於海岸邊；一年四季永不休止的海風，時而緩緩蠕動，時而輕盈漫舞，時而霹靂神遊，或靜或動或急動，皆來自於海洋惠予的能量。利用風能的輕盈運作，代表海巡人員以順應自然力的航海智慧進行海域執法，也彰顯海巡單位以環境關懷的赤子之心從事海洋事務及海事服務的敬民愛民精神。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704193833006.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "901310a7-6dd7-4202-82b3-43dfb81d2ac4",
    "PublicArt_Name": "有鳳來儀",
    "PublicArt_Author": "王詩儒",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "鳳凰（phoenix )60*20*105 \r\n水雉（Hydrophasianus chirurgus）65*20*35\r\n貓頭鷹（owl）20*35*65\r\n柱體（Barrel)高250 上底直徑30 下底直徑60\r\n太陽（sun）大(長*寬*厚)(*1)140*140*0.2\r\n小(長*寬*厚) (*2)105*105*0.2",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "鳳凰\t鋼筋、水泥、馬賽克\r\n水雉\t鋼筋、水泥、馬賽克\r\n貓頭鷹\t鋼筋、水泥、馬賽克\r\n柱體\t鋼筋、水泥、馬賽克\r\n太陽\t不鏽鋼",
    "PublicArt_Place": "高雄市左營區翠華路687號 高雄市立大義國民中學後門臨城峰路社區通學步道上",
    "PublicArt_Funds": "56.6066萬",
    "PublicArt_Unit": "高雄市立大義國民中學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "1.許一男2.陳明輝3.吳梅嵩4.葉耕柏5.潘道仁6.林志陽",
    "PublicArt_SelectTeam": "1.許一男2.陳明輝3.葉耕柏4.陳冬寶5.黃惠詩",
    "PublicArt_Desc": "在這次公共藝術案中，採用鳳凰和太陽作為主要的視覺主體象徵，並搭配貓頭鷹和水雉，作為整體視覺元素搭配。\r\n\t鳳凰：自古以來為祥瑞的象徵，也是本次公共藝術案定名為「有鳳來儀」的原因之一。其他原因有：1.代表祥瑞之兆來到大義國中，並象徵大義國中如同鳳凰一般，展翅上騰，新生不息。2. 有鳳來儀，更可呼應舊東城的「鳳儀門」，帶來了新舊文化歷史的結合。\r\n\t太陽：陽光是生命之所以可以生生不息的重要元素，也象徵著大義國中照亮莘莘學子們的心，也照亮未來國家的主人翁追尋知識的道路。東方昇起的太陽，不但帶來朝氣與活力，也呼應了舊東城的東方方位元素。\r\n\t貓頭鷹：在西方文化中，貓頭鷹一直是智慧的象徵，頭部的特徵就如同博學的智者。而夜行性動物的貓頭鷹，更可以代表學子們為追求學問日以繼夜、孜孜不倦的勤奮精神。\r\n\t水雉：水雉為學校附近蓮池潭中的原生鳥類，更是在地文化的象徵動物之一，在本案中，我們不僅藉用水雉來凸顯大義國中對於在地學子的關注和栽培，更藉用水雉在蓮葉上的躍動輕盈，象徵學子們在追求學問之外，更具備的活力與熱情。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618145613780.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618145613909.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618145613950.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "c47e5f11-4c73-4e94-b0d7-448b26d57745",
    "PublicArt_Name": "串演",
    "PublicArt_Author": "陳俊雄",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "720 × 300 × 300cm",
    "PublicArt_Type": "其他 - LED燈",
    "PublicArt_Material": "LED數位燈具系統、不鏽鋼、花崗岩、鐵件、造型熱浸鋅鋼、環氧樹脂烤漆、數位直印、強化膠合玻璃",
    "PublicArt_Place": "高雄市鳳山區輜汽路281號 衛武營都會公園",
    "PublicArt_Funds": "620（P204-P206，3件組）萬元",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林倩林倩綺、陳書芸、翁佳樑、李憶勳、許自貴、陳燕如、洪根深、林同華",
    "PublicArt_SelectTeam": "林倩綺、顧世勇、涂明達、許自貴、陳燕如、洪根深、林同華",
    "PublicArt_Desc": "作品結構體之發想，來自於高雄這臨海城市物產之一「魚類」，及衛武營原初意象中之軍隊號角的喇叭造形，將其魚體內部的支撐架構「魚骨」之造形，以融合轉借的方式形塑出一件具有城市在地歷史與區域特色的作品。呈現大高雄城市結構發展中，是在不斷增加的中軸線上一直向外擴張，在放射擴張的過程中，城市的面貌不斷的變化，工業的大高雄在不斷的累進中已形塑出更新的面貌。而衛武營的再造正是一塊軸線擴張重要的一部份，也是大高雄在被污名化的歷史意象中最欠缺的一塊「藝術文化」及「城市綠地」。 作品的正面呈現出大鼓圓形的鼓面，其中空深邃的內部泛出藍色的光彩，仿如擊鼓共鳴的聲響無限伸展至另一個開闊的空間。 其隆起之植栽地基造形即取「魚體」外形簡化而成的橢圓形，此綠地的外廓包覆，就如同魚骨在魚肉的整合後才能悠遊前進，而一個城市經由特定的人為形塑，將文化因子（魚肉）城市結構（魚骨）整合為一，大高雄即蛻變為一個兼具經濟發展、自然環境再生與文化藝術綿延共生的健康城市。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704194031877.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "00f2b194-b2cd-4b91-8447-a771244bf1bb",
    "PublicArt_Name": "燕歸來—燕窩",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "燕歸來：250 × 250 × 700cm燕窩石雕座椅：150 × 80 × 80cm（2件）、180 × 100 × 80cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "作品：花崗石、青銅、不鏽鋼、混凝土基座：水泥、石材",
    "PublicArt_Place": "高雄市燕巢區深中路62號 國立高雄師範大學",
    "PublicArt_Funds": "310萬元",
    "PublicArt_Unit": "國立高雄師範大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "張秋木、周居清、盧友義、江文鉅、李億勳、林熺俊、張柏烟",
    "PublicArt_SelectTeam": "戴嘉南、李俊賢、李億勳、吳梅嵩、洪上翔、蘇志徹、王明蘅",
    "PublicArt_Desc": "學校宿舍猶如群居而成的燕窩，用非水平方式堆疊石塊代表燕窩。粗細交錯的石材表面處理方式讓作品感覺精緻而有力量，青銅切焊的飛燕忙碌穿梭於巢前，以燕子育幼的情形，象徵學校師生關係，燕窩戶外座椅、石材燕子造型，既是街道傢具又有休憩弁遄C",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704191722204.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7f15dd84-a63f-4e94-9093-b220e19c3ec2",
    "PublicArt_Name": "獅甲天下",
    "PublicArt_Author": "江政恭",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "作品：200 × 310 × 270cm 基座：300 × 300 × 50cm (單位:公分)",
    "PublicArt_Type": "玻璃 - 玻璃纖維",
    "PublicArt_Material": "作品：玻璃纖維，水泥基座",
    "PublicArt_Place": "高雄市前鎮區中山三路45號 獅甲國民小學",
    "PublicArt_Funds": "52.57萬元",
    "PublicArt_Unit": "高雄市獅甲國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭瑞坤、盧明德、林右正、高燦榮、曾振興、趙建銘、許英毅",
    "PublicArt_SelectTeam": "郭瑞坤、盧明德、林右正、高燦榮、曾振興、趙建銘、許英毅、蘇志徹、蕭木川",
    "PublicArt_Desc": "藉由梅花樁舞獅的作品，表達獅甲的風俗民情，讓學生能在都市急速演化中，能記住這份屬於家鄉的榮耀，故，作品保有古早風味，讓屬於獅甲的傳統藉此延續，進而將『獅甲天下』這份精神融入學習與思考當中，做為生命過程的標竿，也將成為學校與校友的記憶連結點，以呼應學校校本課程的「展藝能」、「在地情」的教育目標。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704191751594.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3c3b86d9-3f2e-44e3-8316-b8773331c9a2",
    "PublicArt_Name": "許願",
    "PublicArt_Author": "簡明輝",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "長660cm、寬660cm、高490cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼\r\n混凝土",
    "PublicArt_Place": "高雄市小港區松和路1號 國立高雄餐旅大學第三教學大樓左側",
    "PublicArt_Funds": "218860000",
    "PublicArt_Unit": "國立高雄餐旅大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "陳文聰、翁英惠、李億勳、許一男、黃郁生、張忠明、許登基",
    "PublicArt_SelectTeam": "陳文聰、翁英惠、李億勳、許一男、黃郁生、張忠明、許登基",
    "PublicArt_Desc": "＜許願＞直接呼應高餐旅學校的本質特色，也象徵學校老師日夜悔孜不倦，提攜後進、作育英才的努力，期望每個學生將來都是傑出頂尖的專業人員；而學生也同樣期待在校的認真學習，出校門將會是高素質受人歡迎的餐旅人。\r\n＜許願＞衷心的說出願望，用頂真態度去實踐每個人的夢想，期盼它真實的到來，願＜許願＞作品能給高餐旅每位師生夢想成真。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618144731453.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618144731320.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618144730996.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618144731503.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618144731187.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "aa81f08a-d8bf-4dbb-84b3-ba5a273e5541",
    "PublicArt_Name": "馬赫同步曲",
    "PublicArt_Author": "林熺俊",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "A：高88cm 、直徑350cmB：高209cm、寬2228cmC：高90cm、弧長1200cmD：高396cm、直徑20cmE：高1900cm、寬4500cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼板烤漆、馬賽克、洗石子Stainless steel Baking varnish, Mosaic, Washes the gravel",
    "PublicArt_Place": "高雄市小港區中山四路2號 南部飛航服務園區",
    "PublicArt_Funds": "199.9",
    "PublicArt_Unit": "交通部民用航空局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "李謀和、陳登欽、黃位政、黃浩德、黃健敏、張國松、戴國焜",
    "PublicArt_SelectTeam": "李謀和、陳登欽、黃位政、黃浩德、黃健敏、張國松、陳水財、蘇信義、戴國焜",
    "PublicArt_Desc": "馬赫（Mach number）是表示速度的量詞，同時象徵飛航速度拉近人與人之間的距離。而同步概念，是以時間來計算人與人之間沒有距離、毫無時差的狀況，是所要求最近的關係。因此，將飛航管制與服務，視為如同藝術般的「曲」的創作，同樣使用一組符號，操作著時間與空間的關係。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704192120528.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8198e34f-f2bf-4435-89be-bfc4aafd0092",
    "PublicArt_Name": "新浪潮",
    "PublicArt_Author": "莊凱旋",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "造型：178 × 96 × 60cm、175 × 110 × 60cm、187 × 134 × 60cm、190 × 156 × 60cm、172 × 95 × 60cm 不鏽鋼雕塑：410 × 332 × 60cm、209 × 225 × 60cm 基座：350 × 150 × 40cm、209 × 225 × 60cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "作品：不鏽鋼、石材、LED燈，水泥基座",
    "PublicArt_Place": "高雄市茄萣區正遠路1號 海岸巡防總局南部地區巡防局",
    "PublicArt_Funds": "190萬元",
    "PublicArt_Unit": "海岸巡防總局南部地區巡防局",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "郭憲武、莊根水、楊瑞禎、蘇志徹、盧福壽、洪明宏、蔡獻友",
    "PublicArt_SelectTeam": "郭憲武、莊根水、楊瑞禎、蘇志徹、盧福壽、洪明宏、蔡獻友",
    "PublicArt_Desc": "本作品由海巡基地周邊圍繞的海浪為發想，以非幾合形狀的抽象浪花表現無形的海浪塑形，躍動的線條就像是從海面延伸到屋頂上的浪花，彷彿新的浪潮般，給予在此停留的人獨特的力量與感受遼闊海景的方式。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704192254195.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "f1bd3b17-7095-4ad9-868e-d47e8469dc4a",
    "PublicArt_Name": "舞動人生",
    "PublicArt_Author": "陳信朗",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "作品：310 × 310 × 240cm 基座：310 × 310 × 12cm",
    "PublicArt_Type": "金屬 - 鐵鋁合金",
    "PublicArt_Material": "鋁合金，水泥基座",
    "PublicArt_Place": "高雄市岡山區柳橋東路36號 高雄縣立岡山國民小學",
    "PublicArt_Funds": "85.7（P198-P200，3件組）",
    "PublicArt_Unit": "高雄市岡山國民小學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "陳信朗、趙秀玲、王燕琨、蘇天財、駱順德",
    "PublicArt_SelectTeam": "蔡獻友、蘇志徹、楊裕隆",
    "PublicArt_Desc": "作品以接近抽象的形式與現代化的建築融合，亦以圓柔的曲線，傳達徜徉於大自然裡優美的舞蹈姿態。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704192545685.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "119690f0-ff73-45a7-8f07-d61e621dd869",
    "PublicArt_Name": "河畔紀事",
    "PublicArt_Author": "林維俞",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "550 × 400 × 70cm",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "抿石子、馬賽克",
    "PublicArt_Place": "高雄市前鎮區鎮中路132號 前鎮高級中學",
    "PublicArt_Funds": "121.9（P192-P193，2件組）",
    "PublicArt_Unit": "高雄市立前鎮高級中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "洪根深、李億勳、林右正、陳雪妮、王漢瑞、陳志達、吳承儒",
    "PublicArt_SelectTeam": "文斌、洪明宏、李億勳、陳水財、林大維、林右正",
    "PublicArt_Desc": "本作品以環形的構思搭配騎乘自行車時可見景物，經過簡化與加強形成敘事性的剪影椅背，除了倡導節能減碳環境保護的意涵之外，更重要的，無論師生與居民，男女老少都可以對這條河流景緻娓娓道來。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704192727267.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "430993ab-c01f-4fcc-9e2f-d70e65227996",
    "PublicArt_Name": "號角響起",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "310 × 285 × 360cm (單位:公分)",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "鑄鐵、不鏽鋼、鍍鋅鋼、環氧樹脂烤漆、花崗岩、LED數位燈具系統",
    "PublicArt_Place": "高雄市鳳山區輜汽路281號 衛武營都會公園",
    "PublicArt_Funds": "620（P204-P206，3件組）萬元",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林倩綺、陳書芸、翁佳樑、李憶勳、許自貴、陳燕如、洪根深、林同華",
    "PublicArt_SelectTeam": "林倩綺、顧世勇、涂明達、許自貴、陳燕如、洪根深、林同華",
    "PublicArt_Desc": "從軍事重地到藝術展演廳院的設置，從軍事的號角演繹成散發樂章的樂器；這是一具國際視野與進化中的城市所必經過程及必要條件。 作品上端，將軍事武器視覺意象轉化為音符及樂曲的擴散，結合「生態、環境、科技、人文與藝術」，造型以童趣方式藉「天籟」--蛙鳴--意喻自然與城市之綠化。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704192912401.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a27a5213-9f25-454d-ad21-f3ed423ecee5",
    "PublicArt_Name": "巨人與戰機",
    "PublicArt_Author": "李儒杰",
    "PublicArt_Year": "2010",
    "PublicArt_Size": "1320 × 770 × 851cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼",
    "PublicArt_Place": "高雄市岡山區巨輪路1號 空軍航空技術學院",
    "PublicArt_Funds": "167萬元",
    "PublicArt_Unit": "空軍航空技術學院",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "方惠光、蔡獻友、吳旭峰、徐緯民、楊德才、倪瑛霞",
    "PublicArt_SelectTeam": "方惠光、吳旭峰、楊德才、倪瑛霞",
    "PublicArt_Desc": "本件作品以巨人的形象與戰機結合。戰機象徵著空軍的戰力，而底下的巨人則象徵後勤維修及航管引導的工作團隊，以及航空技術學院在中華民國空軍中所扮演的支撐戰力角色。 作品中飛機仰角朝上意指中華民國空軍不斷向上精進提升、起飛。下面的推手（巨人）則是空軍戰力提升的關鍵—航空技術學院，本件作品中，巨人以強壯的鋼鐵形象呈",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704194205622.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8077b7eb-b9ad-4e73-b002-f5ed0171476d",
    "PublicArt_Name": "凝聚的綠寶石",
    "PublicArt_Author": "樂子",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1500 × 350cm",
    "PublicArt_Type": "玻璃 - 玻璃纖維",
    "PublicArt_Material": "玻璃",
    "PublicArt_Place": "高雄市小港區中山四路2-2號地下一樓",
    "PublicArt_Funds": "2000",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "好水滋養、千年老樹、舊幹新枝、生生不息，寫盡了臺灣人對中華民族與文化的情結。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704194252646.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5a0cc95b-4d4c-4eb6-8d32-f98ac8d57e56",
    "PublicArt_Name": "龍華國民小學遷校校舍新建工程公共藝術設置",
    "PublicArt_Author": "黃裕榮",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "",
    "PublicArt_Type": "",
    "PublicArt_Material": "石",
    "PublicArt_Place": "高雄市鼓山區大順一路858號",
    "PublicArt_Funds": "433萬元",
    "PublicArt_Unit": "高雄市龍華國民小學",
    "PublicArt_Method": "",
    "PublicArt_ActTeam": "翁英惠\t設計學院院長\r\n吳梅嵩\t校長\r\n許一男\t理事長/總經理\r\n陳明輝\t美術系講師\r\n王瑞裕\t學務主任\r\n郭鈴惠\t校長\r\n黃建興\t建築師",
    "PublicArt_SelectTeam": "吳梅嵩\t校  長\t中華藝術學校\r\n許一男\t理事長\t駁二藝術發展協會\r\n黃建興\t建築師\t黃建興建築師事務所\r\n陳水財\t副教授\t台南科技大學\r\n陳立民\t副教授\t高師大視覺設計系\r\n陳雪妮\t科  長\t高雄市政府文化局\r\n賴新龍\t副教授\t大仁科技大學",
    "PublicArt_Desc": "龍華國民小學是個具有故事的環境，其結合社區營造概念，符合生態環保概念，回歸自然。打造一個開放、人文、境教、智慧校園，並建構互動分享的空間，創造對話討論的環境！因此本設置案結合這兩個概念以傳達本公共藝術設置案之創作構想，分別是：樹的回憶及校園裡的msn-圓融‧對話。作品設置完成希望能加強本校的人文背景與公共藝術作品的結合；藉以提昇學生的人文與美學素養。並希望透過此件作品，讓全校師生對校園有更深的認同感與歸屬感。本藝術品成為校園與社區民眾聯繫的橋樑，供大眾所共享的藝術，讓師生和社區居民共同欣賞與品味，提昇藝術美學之素養。",
    "PublicArt_Image": null
  },
  {
    "PublicArt_INDEX": "af3788cf-da3a-4ef7-b968-fa211234b4ab",
    "PublicArt_Name": "有鳳來儀",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "168 × 472cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "原色不銹鋼板5.0mm加工型彩繪",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "18.59萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "大東捷運站仗有鳳山之豐饒物產環境，其間的新舊人文變革代表轉型中的鳳山，正如鳳凰以成雙成對之姿載歌載舞，吟唱交織出如詩入夢的地域性特色。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170628849.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170627558.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170628138.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "dce039f3-982b-4406-8d5b-e6fd363b25b0",
    "PublicArt_Name": "聆聽雲光(二)",
    "PublicArt_Author": "林珮淳",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1018 × 202cm",
    "PublicArt_Type": "玻璃 - 強化玻璃",
    "PublicArt_Material": "三菱鏡玻璃、強化玻璃、金屬固定架",
    "PublicArt_Place": "高雄市橋頭區經武路20號",
    "PublicArt_Funds": "900(P318-P321，4件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "希望能提供一個停下來，安靜、優雅、容易、學習欣賞、觀美的介面。光的再生，重塑造停留駐足的雙重時間美學，帶來更深一層的土地所在意象層次，也呼應了此處保育護生的人文關懷。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150254601.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150254474.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a1c08dd7-701e-409e-97dd-eaf08fffbbed",
    "PublicArt_Name": "海納百川",
    "PublicArt_Author": "董陽孜",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "260 × 156cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼板、電控液晶玻璃、紅外線感應裝置、不銹鋼框架",
    "PublicArt_Place": "高雄市楠梓區金田里18鄰加昌路178號",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "盧明德、許自貴、蘇信義、盧友義、陳坤崙、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、許自貴、石瑞仁、黃位政、陳泓易、蘇信義、陳惠婷",
    "PublicArt_Desc": "「海納百川」出於晉‧袁宏《三國名臣序贊》：「形器不存，方寸海納。」李周翰注：「方寸之心，如海之納百川也，言其包含廣也。」說明大海之所以廣大深厚，緣其涵納百川，不擇細流。作品除了說明高雄是軍、工、商、漁多元化的港灣大都市，同時呼應位於本站旁的國立高雄海洋科技大學，砥礪莘莘學子，無論求學或做人處事皆須抱有海納百川的態度與胸襟，謙卑地吸取多面向的知識與經驗，敞開胸懷目光放遠，不拘泥於細枝末節，朝向「處處皆是學問，人人皆為我師」的學習境界。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150005521.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "165188cd-569c-4883-ad40-ed63828261cc",
    "PublicArt_Name": "花間于飛",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "168 × 708cm (單位:公分)",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "原色不銹鋼板5.0mm加工型彩繪",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "37.1萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "以《鳳凰于飛》的概念延伸於花間漫遊的驛站意象，《花間于飛》刻意以冷暖色調隱喻成雙成對之男女於車站邂逅、相思寄情之浪漫情懷。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704194645742.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "652339a9-5b2c-4633-beb2-ee154ab9c6e9",
    "PublicArt_Name": "救火水龍護原生",
    "PublicArt_Author": "謝明憲",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "70 × 70 × 650cm",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶",
    "PublicArt_Place": "高雄市那瑪夏區平和巷61號",
    "PublicArt_Funds": "17萬",
    "PublicArt_Unit": "高雄市政府消防局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁勝豐、蘇至徹、吳守哲、蘇信義、戴榮伸、劉文昌、何鴻義",
    "PublicArt_SelectTeam": "翁勝豐、康錦樹、吳守哲、黃郁大、劉文昌",
    "PublicArt_Desc": "救火是一項神聖使命，以紅色「水龍」的形式象徵消防救火設備的意象。運用現代性的龍形符號，融合〈鄒族與布農族〉狩獵、務農的文化特色，以守護之姿守護著當地原住民生命財產，整體造型生動精緻，是福運吉兆的意象。救火水龍的存在，象徵生命安全的保障，亦帶來最大的平安。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704194726635.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "938e71f4-f396-416f-9b5a-f206e9aac0a3",
    "PublicArt_Name": "粉蝶翩翩",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "168 × 354cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "原色不銹鋼板5.1mm加工型彩繪",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "13.63萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "變動中的鳳山引發人們對生態環境的關懷，《粉蝶翩翩》企圖以大量花卉、粉蝶的穿梭效果，於車站的出入口注入一股人文溫馨的生態劇場空間氛圍。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704194908619.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "ef429a22-d20d-4325-892e-d6a4738bea09",
    "PublicArt_Name": "精靈樂章",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm，面積28.56m2",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "馬賽克鑲嵌、金屬邊框",
    "PublicArt_Place": "高雄市新興區中正2路45號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "以傳統的八仙彩為創作出發點，臺灣民間信仰中，八仙是一個多元組合兼具吉祥喜慶的團體，其特質代表社會各階層，且深得民眾喜愛，常於新居落成、結婚典禮，懸掛於廳堂門楣之上。畫面中以天真活潑的兒童為主角，如同大地精靈將歡樂與驚奇帶給人們，騎著八種不同象徵海洋與陸地的可愛動物、手持傳統南管與西洋樂器，代表中西文化交流。八仙是由凡人而轉化，因為他們努力不懈的修練，終於修得正果，給人們深深地啟示，成為人們平時奮鬥努力的榜樣。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621165953232.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621165952019.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621165953315.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621165952707.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "64a69bc5-b293-4678-a223-db3b1b037565",
    "PublicArt_Name": "綠野仙蹤",
    "PublicArt_Author": "楊文霓",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶土、釉",
    "PublicArt_Place": "高雄市左營區博愛3路435號地下1層",
    "PublicArt_Funds": "200萬元",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "盧明德、許自貴、蘇信義、盧友義、陳坤崙、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、許自貴、石瑞仁、黃位政、陳泓易、蘇信義、陳惠婷",
    "PublicArt_Desc": "以一種「穿越」的概念，表現陶壁與自然空間的相對應關係。虛實之間的「門」代表時空穿越入口意象；而門內的風情則表現高雄川流在新捷運線上的旅人新風貌",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704194527148.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8220670d-6113-4351-a34f-d9e0f9806a13",
    "PublicArt_Name": "身體文明：技術、韻律、記憶",
    "PublicArt_Author": "黎志文",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "582 × 108 × 95cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "白花崗岩、黑花崗岩、紅花崗岩、灰花崗岩",
    "PublicArt_Place": "高雄市左營區中海路200號",
    "PublicArt_Funds": "600萬",
    "PublicArt_Unit": "行政院體育委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "楊明州、胡啓邦、翁英惠、盧明德、吳啟光、陳雪妮、黃敏禎、林立平、趙建銘、劉培森、郭中端",
    "PublicArt_SelectTeam": "劉培森、郭中端、楊文霓、倪再沁、陳建北、蘇志徹、曲德義",
    "PublicArt_Desc": "文明開始於身體的律動，人類透過身體行動的外延構築、開展了一個超越自然的人類世界。人類身體，其內在所蘊含的技術、韻律、記憶，正是知覺其構築文明世界的動態和建設性的空間。梅洛龐帝以對感知的研究作為出發點，認識到身體不只是一件物事、一個科學研究的對象，它同時也是經驗的永恆前提，由向世界知覺性的開放和傾注（investissement）形成。 依據梅洛龐帝對於身體、知覺的概念，身體做為擁有世界的總和媒介，其運動以及運動呈現的意義逐步構築起一個豐富的精神世界，依此則世界運動會無疑正是人類身體、身體行動以及身體構築起的文化世界的表徵。透過環繞於身體的技術、韻律以及記憶，地域、歷史以及人文精神的種種得以展延、互動開展。 公共藝術計畫《身體文明：技術、韻律、記憶》以梅洛龐帝其知覺的身體性以及身體的意向性的概念做為開展作品創作的基礎，將屬於身體運動的特質，轉化為抽象的藝術造型表現。透過作品的呈現，《身體文明：技術、韻律、記憶》嘗試重新將身體知覺做為構築美感以及藝術鑑賞的基礎，以及身體運動與藝術二者的交會點。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621152723141.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "d7b4ff29-2e00-488c-83f6-df1acd97d6ed",
    "PublicArt_Name": "大地之歌",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "120 × 120cm（共7件）",
    "PublicArt_Type": "其他 - 光柵板",
    "PublicArt_Material": "光柵板",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "104.13萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "當大量花卉、昆蟲生態圖鑑的光柵變圖效果，於車站出入口產生行進間的視點移動效果之際，引發花卉及昆蟲間虛實隱退、躍出於視線的經驗美感。為冰冷的硬體空間，注入人文溫馨的生態劇場氛圍。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171922170.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171923117.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "6f5a89be-804f-4c59-be1d-e1b396d10b4f",
    "PublicArt_Name": "串起異鄉人",
    "PublicArt_Author": "林煌迪",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm，面積28.56m2",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "烤漆金屬板、雷射切割金屬造型、LED燈",
    "PublicArt_Place": "高雄市苓雅區中正1路286號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "個人的創作長期以來總不脫討論異文化相互介入與影響的相關議題，因此在個人的創作脈絡中時常出現想像中的「外星人」或「不明飛行物」等相關的符號，並在作品中以這些符號象徵不同的文化主體。 在此件作品中，我仍然沿用這些符號，以象徵在這個邁向國際化城市中，因捷運開通，而將南來北往的的異鄉客串連在一塊，這些異鄉客可能來自不同社區、不同城市、不同族群、不同性別、不同國家，甚至可能來自於不同星系、不同時空，在外貌與內涵各有異同，這也某種程度的暗示了在這塊土地上文化狀態的瞬時與積累。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170023864.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170022938.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170023006.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "51f42141-d8d7-4bc0-9861-de1839acb2c0",
    "PublicArt_Name": "日出臺灣",
    "PublicArt_Author": "可樂王",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼板、數位影像印刷",
    "PublicArt_Place": "高雄市左營區博愛2路485號地下1層",
    "PublicArt_Funds": "300萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "盧明德、許自貴、蘇信義、盧友義、陳坤崙、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、許自貴、石瑞仁、黃位政、陳泓易、蘇信義、陳惠婷",
    "PublicArt_Desc": "作品所表達的是臺灣日出時，一切即將剛開始的那一刻。大家都朝氣蓬勃地在天空飛翔，一起迎向未來，與巨蛋站象徵科技未來的發展互相呼應。整張圖的畫面充滿著一股歡樂的氣氛，儼然成為一座新的臺灣式迪士尼遊樂園。透過童稚般的筆觸、童心般的趣味畫面，讓高雄打開世界的大門，歡迎所有的人一起來加入這充滿新希望的行列，手牽手迎向嶄新的未來。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704194443357.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8b15dc4c-cf0b-4cd7-b3db-c6f74185a115",
    "PublicArt_Name": "愛之塔",
    "PublicArt_Author": "董振平",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "950 × 1000cm，面積95m2",
    "PublicArt_Type": "其他 - LED燈",
    "PublicArt_Material": "鋼板、烤漆、鋼纜、LED燈",
    "PublicArt_Place": "高雄市苓雅區中正1路2號地下1層",
    "PublicArt_Funds": "250萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "作品透過衛武營早期的歷史背景，選擇以人、馬、字體的元素，延伸到騎士、莊園的建立，隱喻愛的寬廣、慈悲理念。主體像漏斗般的造型，以三角形角柱支撐上端愛字文體結構，展現出一組起承轉合的樂曲氛圍。作者嘗試用文字在作品中加入一些不確定的因子，尤其當形體經扭轉過後，都具備一種不盡相同、 無法臆測或可以預期的驚喜。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170213282.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "215557de-3856-46dc-9321-c7bea6766b21",
    "PublicArt_Name": "火焰",
    "PublicArt_Author": "伊東豊雄",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "412.9 × 356.3 × 2000cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "螺旋鋼管材、鋼板烤漆",
    "PublicArt_Place": "高雄市左營區中海路200號",
    "PublicArt_Funds": "750萬",
    "PublicArt_Unit": "行政院體育委員會",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "楊明州、胡啓邦、翁英惠、盧明德、吳啟光、陳雪妮、黃敏禎、林立平、趙建銘、劉培森、郭中端",
    "PublicArt_SelectTeam": "劉培森、郭中端、楊文霓、倪再沁、陳建北、蘇志徹、曲德義",
    "PublicArt_Desc": "2009世運會主場館具有3個主要設計構想。 都市公園（Urban Park）／開放式運動場館（Open Stadium）／螺旋連續體（Spiral Continuum） 藝術作品－《火焰》不但成為主場館的地標象徵，也延續了主場館的3個主要設計構想。 《火焰》成為引導來訪者從高雄捷運世運站前往世運會主場館的顯著標的物，同時也成為周邊地域的主要地標。利用捷運前往參觀賽事的來場者，可於高雄捷運站月臺上，便可看到主場館與此藝術作品。此藝術作品不但可以引導來場者前往面向中海路展開迎賓雙臂的世運場館外，同時提高來場者的期待感與興奮感。 設置於主場館的大屋頂的律動鋼管材（Oscillate），以螺旋狀的方式環繞著整個主場館，延續至南側的中海路附近。作品《火焰》，延續主場館屋頂鋼管材的律動，以6根主要鋼管材以及3片鋼板材以螺旋狀向上迴旋延伸，如生命力般的舞動象徵著高雄市特有的自然、人與都市。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704201449053.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "6c232d87-2ef1-47a7-88b4-ca43f5bb5a96",
    "PublicArt_Name": "集香引鳳",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "作品：400 × 400 × 700cm，基座：400 × 400 × 120cm",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鐵件、外表環氧樹脂烤漆、水泥基座",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "194.64萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "《集香引鳳》結合大東站公共藝術《鳳凰來儀》之主體意涵，以擬境與擬態復合手法擷取植物生態之基本造形，構築「香木築巢 引鳳于飛」之涵義，傳達「多元與融和」的精神，賦予大東站生態劇場之入口意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200743734.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9fbfa746-527c-4045-b8c6-cba08a8f0bb2",
    "PublicArt_Name": "珍愛一生（2）",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "168 × 354cm (單位:公分)",
    "PublicArt_Type": "",
    "PublicArt_Material": "亮白金屬板5.0mm耐候型彩繪",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "37.1萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "以青瓷材質感之平板噴畫效果，將《珍愛一生》的主題意象以相互呼應的手法，裝置於對向牆面上與之遙遙相望。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200841449.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "45f24724-9424-4c1e-88ad-ccbc9baca632",
    "PublicArt_Name": "明日都星",
    "PublicArt_Author": "朱宇明",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1200 × 170cm",
    "PublicArt_Type": "數位影像 - 數位影像印刷",
    "PublicArt_Material": "數位影像印刷、強化膠合玻璃、LED面板、影像擷取互動程式",
    "PublicArt_Place": "高雄市鼓山區博愛2路21號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "盧明德、許自貴、蘇信義、盧友義、陳坤崙、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、許自貴、石瑞仁、黃位政、陳泓易、蘇信義、陳惠婷",
    "PublicArt_Desc": "作品運用環型攝影與數位影像結合的技術，將捷運站周遭的環境特色巧妙地融入捷運站內，並將其過去、現在與未來城市印象交互融合，讓原本荒蕪的大片農地、繼起的住宅大鎮，與未來文化藝術氣息濃厚的人文城市新形象同時在民眾眼前展現。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200945476.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0924e86a-7754-4e96-a5dd-d0e34267a8dc",
    "PublicArt_Name": "迴游",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "4260 × 320cm",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "馬賽克鑲嵌",
    "PublicArt_Place": "高雄市前鎮區翠亨北路225號地下1樓",
    "PublicArt_Funds": "200(P298-P299，2件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "前鎮高中站位於媽祖港旁，上溯鳳山溪、下接前鎮河，自高雄灣水域暢通，以往船隻可行至此靠岸，水流清澈可見河底水草與棲息各種魚類，車站東側為高雄地區知名黃昏魚市場，透過民眾的共同記憶與參與，邀請前鎮高中美術班、五甲國中美術班與紅毛港馬賽克鑲嵌工作室共同製作，作品以民眾常見之水族類為主題，魚群與各式水族依循動線迴游而上，藉此呈現昔日與現在之場域意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200649947.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "2bbc5722-b008-46ae-b77d-d169ce6569d8",
    "PublicArt_Name": "鳯人緣心",
    "PublicArt_Author": "潘大謙",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "900 × 600 × 100cm",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "馬賽克瓷磚、全像攝影、LED燈具",
    "PublicArt_Place": "高雄市鳳山區中山東路瑞竹里225號地下1層",
    "PublicArt_Funds": "720(P323-P325，3件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "歷史的面貌如同石子丟進池塘激起的漣漪，水波由中心輻射向四面八方。先民開拓打拼，建造鳳山城，今天的鳳山新城城牆遺跡仿似一個心形，我們運用「歷史漣漪」的構築概念，將鳳山的歷史發展由一個同心圓的漣漪輻射開始，以中央圓桌為核心，往外輻射過歷史中鳳山新城的心形，再到兩組鳳凰來朝圖案圓形環抱，形成抽象的漣漪意象，此作品以手工馬賽克製作地面圖案鋪面，色磚以手工剪裁及選色鋪設，象徵先民築城一步一腳印。圓形桌面分別嵌入七個小圓形，中間以市花「四季海棠」作為鳳山市的符號象徵，市花周圍分別是六位代表鳳山市民的人物代表肖像，展現現代生活的滿足容顏。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170104385.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170103370.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5ed1abe3-47f8-475b-82f4-d439cd8bf9d7",
    "PublicArt_Name": "傳承",
    "PublicArt_Author": "尼誕‧達給伐歷",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "長老：500cm、小孩300cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼",
    "PublicArt_Place": "高雄市前鎮區翠亨北路390號",
    "PublicArt_Funds": "99.5萬",
    "PublicArt_Unit": "高雄市政府原住民事務委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "俄鄧‧殷艾、雷賜、蘇信義、江冠勳、陳偉、林子森、陳幸雄",
    "PublicArt_SelectTeam": "俄鄧‧殷艾、林子森、蘇信義、陳偉、張蕙蘭、江冠勳",
    "PublicArt_Desc": "這組作品來自創作者童年的部落經驗：當部落長者衰老至無法打獵、無法正常出外工作、自覺生命時限已然屆臨之時，就會著上盛裝，將自己的生命經驗與生活技能傳給稚齡兒童（通常是孫子輩的幼童）。 來自原住民部落的傳統智慧，有著與自然萬物更迭相襲的倫理，這樣的法則今日或許在部落理已經無法持續保持連結，但創作者藉著這件作品，希望能將傳統部落長者的智慧與精神，樹立在高雄都會區的一角，讓都市裡的原住民小孩也能像作者小時後一樣，受到某個VuVu（阿公）的智慧傳承與眷顧，在今日生長的環境裡快樂聰明的快樂茁壯。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621173315661.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621173315110.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "2245a334-0d81-4587-92f9-c0bf08a1c439",
    "PublicArt_Name": "林間上翔",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "168 × 354cm (單位:公分)",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "原色不銹鋼板5.0mm加工型彩繪",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "18.59萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "透過生物形態之變形、溶接手法，在快速筆觸刷過處，營造花卉昆蟲飛翔及躍出視線的美感。為車站出入口行進間，注入一股人文溫馨的生態劇場空間氛圍。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704201554821.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "fb2faff0-fbce-43ed-bc69-bea9fd6cf6b9",
    "PublicArt_Name": "心靈懸掛的地方",
    "PublicArt_Author": "安聖惠",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "500 × 600cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "作品：鋼板塑形、晶土色片拼貼、水泥、鋼筋",
    "PublicArt_Place": "高雄市前鎮區翠亨北路390號",
    "PublicArt_Funds": "124.2 萬",
    "PublicArt_Unit": "高雄市政府原住民事務委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "俄鄧‧殷艾、雷賜、蘇信義、江冠勳、陳偉、林子森、陳幸雄",
    "PublicArt_SelectTeam": "俄鄧‧殷艾、林子森、蘇信義、陳偉、張蕙蘭、江冠勳",
    "PublicArt_Desc": "本件作品為女性藝術家之創作，名為Takelandhane（懸掛處）Ki abake（靈魂），作者指出：「家屋」這個魯凱語的詞彙，本意即為「靈魂的懸掛之處」。象徵家屋的鋼塑結構體，宛如母親的子宮壁，流線的造型讓屋壁堅質的文理化身為書展優雅的花朵。藝術家以花瓣尖端的露珠形象，緊扣「懸掛靈魂」的核心語彙，並以此作為本案「變遷與傳承」的意義中心發展。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172717011.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172717793.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7fc0108e-f2f6-441c-9ffa-beca0ff9d9dd",
    "PublicArt_Name": "蔓延的愛（1）",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "同電梯尺寸",
    "PublicArt_Type": "",
    "PublicArt_Material": "MP透明片正貼 3MIJ3650-114/3M8519, Anti-UV transparent laminating film",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "23.9萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "當透明電梯快速運送旅客的同時，每一次的開合都代表當地與外界的連結，共生植物圖像以單純之姿蔓延於外圍玻璃上，使乘客於進出電梯的短時間內，立即感受特有的生態氛圍。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171006710.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7afcb887-da1f-4ad3-841c-bf6b366afe17",
    "PublicArt_Name": "萌",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "作品：160 × 160 × 250cm（共3件）\r\n基座：60 × 60 × 20cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "作品：3~10mm不鏽鋼圓棒、鍍鉻烤漆，不銹鋼基座\r\n基座：不銹鋼材",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "104.13萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "中國神話相傳鳳凰為一以香木築巢育子之祥禽，《萌》即以蛋形雕刻裝置象徵三隻幼鳳凰的孕育，為捷運站長廊注入一股萌發的生命力。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170515597.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170515393.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170516213.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "de154d98-9a16-49ee-94f0-be6999960ed5",
    "PublicArt_Name": "棲",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "472 × 338cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "原色不銹鋼板5.2mm加工型彩繪",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "18.59萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "《棲》強調鳳山擁有多處歷史景點，以呈現梧桐翠竹般之劇場思維，隱喻「梧桐棲鳳」的文化定位。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171132591.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "118f215e-9f55-4f22-8c16-be8217e8fc13",
    "PublicArt_Name": "輕聲細語",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "120 × 120cm（共4件）",
    "PublicArt_Type": "其他 - 光柵板",
    "PublicArt_Material": "光柵板",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "41.1萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "《輕聲細語》運用光柵板之立體幻影變圖效果，營造出神祕的科技美感，並以此表現大寮空曠田園環境中，鳥兒、昆蟲輕靈婉轉的夜語，濃郁地傳達地域性人文自然環境的特色。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704201047815.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "c14867d4-a73a-45cc-b964-c403a988f109",
    "PublicArt_Name": "歷史的三個孩子-一種場域躍動的美學",
    "PublicArt_Author": "顏名宏",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "912 × 912 × 80cm",
    "PublicArt_Type": "金屬 - 鐵鋁合金",
    "PublicArt_Material": "原木、金屬(鋁)、大理石、玻璃圓柱、紅磚",
    "PublicArt_Place": "高雄市橋頭區興糖路19號",
    "PublicArt_Funds": "900(P318-P321，4件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "本站公共藝術創造地景式環境意象，反映橋頭糖廠過往歷史，以軸線拉出園區空間對應的議題。作品採幾何三方位的造形，創造場域性的空間連結和動線指引，分別指向園區的三方歷史空間建築群，並從當地文化意象取材重點文化基因：大理石元件─社宅事務所、原木元件─雨淋板的舊職工官舍、鑄鋁元件─住民社區捷運站體建築。主體材料以高雄百年窯場「三和瓦窯」燒製的紅磚碎片，重新凝聚鑄造而成。主體三元件採凹凸陰陽互補，形成暗喻時間軌跡式的可乘坐台面，塑造文化意涵的場域，並創造站前廣場一個可親近匯集、等待對話、嬉戲溝通和記憶串聯的地景意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150743032.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150743992.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "31667d1f-c1a2-4ead-9a8f-b2501492d633",
    "PublicArt_Name": "游。戲——悠游當代 戲墨古城",
    "PublicArt_Author": "劉育明 、 郭瑞祥 、 林武成",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm、840 × 170cm、480 × 170cm、240 × 170cm",
    "PublicArt_Type": "玻璃 - 強化玻璃",
    "PublicArt_Material": "強化膠合玻璃、不銹鋼框架、電腦主機、11台液晶顯示器、數位影像印刷",
    "PublicArt_Place": "高雄市左營區高鐵路107號地下1層",
    "PublicArt_Funds": "500萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "盧明德、許自貴、蘇信義、盧友義、陳坤崙、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、許自貴、石瑞仁、黃位政、陳泓易、蘇信義、陳惠婷",
    "PublicArt_Desc": "作品主要以當代藝術表現思維，將左營蓮池潭不同的自然景觀事件壓縮在共時的結構中，呈現出一個倏然靜止的、卻又於靜止畫面中局部呈顯動態擬真的趣味性及超現實性格，瞬間達到完滿形式出現的共同點。又彷如傳統與當代於方形場域中的相互參滲，綜觀左營古城風光於歷史推移的時光中不斷更迭之意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153812905.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153811992.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153813463.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "c369b697-ff77-4fae-9e40-b39d311ab5ef",
    "PublicArt_Name": "半屏山之魂",
    "PublicArt_Author": "Wood Janssen Incorporated",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "面積 922 m2",
    "PublicArt_Type": "數位影像 - 數位影像玻璃",
    "PublicArt_Material": "數位影像輸出、強化膠合玻璃",
    "PublicArt_Place": "高雄市楠梓區宏南里1鄰左楠路1號",
    "PublicArt_Funds": "2000萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "世界最新最大的數位藝術玻璃\r\n世運站為紅線由南向北穿越半屏山後的第一個高架站，位處北高雄半屏山、蓮池潭與舊城遊憩帶過渡到左楠軍眷和工業區的交通樞紐，亦為臺灣舉辦2009世界運動會之門戶。其站體外觀設計成「海上雄獅‧揚帆待發」之風貌，以AAG (Architecture Art Glass)建築藝術玻璃為站體與公共藝術之主要媒材，透過數位藝術獨特的設計語彙跨越2D與3D的呈現，在屋頂採光天窗、車站主體側牆以及電扶梯之藝術玻璃上處處可見花草、樹木、山林光影等蹤跡，宛若一座空中雨林騎跨在都市塵囂之上，讓人彷彿置身半屏山的綠林步道中，在高雄的艷陽下同光影舞蹈，娓娓道出「高雄人與山的故事」。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704201705292.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7b683a77-b72c-4fca-ba6d-b4c828a820b5",
    "PublicArt_Name": "正負之間",
    "PublicArt_Author": "董振平",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm，面積28.56m2",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼板數位直印、繪畫、烤漆",
    "PublicArt_Place": "高雄市苓雅區中正1路2號地下1層",
    "PublicArt_Funds": "1500萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "從粗曠形色中轉調另類生命版圖，探索生活中的負面情緒，以及生活空間遭受的擠壓與脅迫的反式張力。作品內容以敘述式置景手法結合莊園騎士，摩托車賽者與犀牛坦克，在橫衝直撞充滿速度與動能下，經營出身分認同(條碼)及生活頻率(琴鍵)對應下緊張關係，強調是非正義永遠存在於矛盾性的衝突循環狀態之中。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170352030.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170351872.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170351468.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170351755.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0e517d30-111d-4d4b-9d8c-ae9f92087abd",
    "PublicArt_Name": "童年往事、焊動、現在進行式、希望、夢想起飛",
    "PublicArt_Author": "左彎藝術工作室",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "3230 × 120 × 250cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼、型鋼、陶、玻璃、石材",
    "PublicArt_Place": "高雄市前鎮區新衙路17號",
    "PublicArt_Funds": "33萬",
    "PublicArt_Unit": "高雄市前鎮國中",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "許一男、盧福壽、陳明輝、朱文璋、賴榮飛",
    "PublicArt_SelectTeam": "陳雪妮、許一男、陳明輝、洪顯超、蘇志徹",
    "PublicArt_Desc": "一直在記憶中尋找創作元素，時間軸的概念蘊然而生。對過去的記憶情感，對現在草衙的描繪，對於未來的期許，過去—現在—未來形成一個時間軸。 運用不同材質、不同的表現方式呈現時間軸概念，以一組多件的作品串聯起時間裏的記憶。作品將設置於學校大門口外牆一列排開，形成藝術長廊。走在紅磚道上就猶如揭開歷史的捲軸，一個故事、一個故事慢慢地訴說對未來的期待。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704203813681.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8f6efad3-d0ba-4d53-bcf8-a4ffd978b18a",
    "PublicArt_Name": "一二三四再來一次Ⅱ",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "360 × 170cm，（共12件），面積73.44m2",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、LED燈、感應器",
    "PublicArt_Place": "高雄市苓雅區中正1路99號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "複合媒材之形式意義-“I see , then I am”召喚觀者成為作品之一部分。作品重覆、再製，橫向排開數個片段，紀錄運動模式中不同時間的存在狀態-位移方式；行為模式，縱使一再重覆，每一次所佔據的時間的唯一性，被「形式」硬生生的擷取了下來。 活著的行為之存在事實，在形式的模擬下，一再被觀者（民眾）主觀的重新建構著，介於真實與虛構之間。在這樣的創作理念下，與其說個人的創作世界是一種“美感形式”：我更希望它是源自藝術主體精神發散的結果。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170308901.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8e69e7e1-cd77-43cf-87e9-a615b8d6100c",
    "PublicArt_Name": "異質樂園",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "馬賽克鑲嵌",
    "PublicArt_Place": "高雄市前鎮區翠亨北路225號地下1樓",
    "PublicArt_Funds": "200(P298-P299，2件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "前鎮高中站位於新草衙為前鎮區行政中心所在地，六○年代高雄加工區與前鎮漁港對於勞動人口大量需求，許多外來就業人口聚集於此，居住環境不佳，基於生活的需要，形成高雄最著名之違章建築區，如今違建已不復在，昔日違章建築的印象已成為大家心中共同的記憶。然違章建築恍如建築的解構語彙，從混亂、交疊、錯置、扭曲、解體、顛倒等視覺風格中，呈現出一種非理性與非規格化的表現形式，這是人與土地、生活與環境的另類對話，雖然是城市美學中的逆流，但卻也表現出人在艱困逆境中的堅韌生命力。作品以解構語彙的構圖與塗鴉式的表現手法來進行，木棉花象徵著高雄市的意象與建築交疊錯置，記錄此場域曾發生過的社會集體行為模式，經由空間的差異與時間的沉澱，創作出非現實空間的完美理念形式，藉以突顯場域的異質性與實存精神。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704204057237.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "1139d6cf-020a-434f-a82e-aaa44ec9b1a2",
    "PublicArt_Name": "蔓延的愛（2）",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "同電梯尺寸",
    "PublicArt_Type": "",
    "PublicArt_Material": "MP透明片正貼 3MIJ3650-114/3M8519, Anti-UV transparent laminating film",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "23.9萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "當透明電梯快速運送旅客的同時，每一次的開合都代表當地與外界的連結，共生植物圖像以單純之姿蔓延於外圍玻璃上，使乘客於進出電梯的短時間內，立即感受特有的生態氛圍。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171558918.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9400311f-9f5d-4c32-97cf-aab7815598ad",
    "PublicArt_Name": "宇宙生命力",
    "PublicArt_Author": "蕭勤",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "360 × 220cm（共4面）",
    "PublicArt_Type": "陶瓷 - 陶板",
    "PublicArt_Material": "陶板",
    "PublicArt_Place": "高雄市前金區中山1路11號地下1層",
    "PublicArt_Funds": "700(P304-P305，2件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "作畫這件事的第一重要性，並非作畫；而是透過畫，來對自己人生進行始源的探討、人生經歷的記錄與感受，以及人生展望的發揮。創作二字目前對藝術家來說，並非個人的創作，而是宇宙的生命力直接透過個人的心、手做出來的東西。藝術家不是一個創作者，而是一個傳遞者而已。因此，一切的符號、色彩皆源自於宇宙，所以心即宇宙，宇宙即心。而任何的圖象，都是心的感動。這四幅陶板畫，正是蕭勤對宇宙的感動。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163448398.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163448222.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163448070.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "6ad449ae-4fbc-432a-90e7-ab5d7ab4a445",
    "PublicArt_Name": "乘風破浪",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "(1)500 × 180 × 50cm (2)380 × 125 × 80cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、青銅",
    "PublicArt_Place": "高雄市苓雅區中正1路99號",
    "PublicArt_Funds": "592(P263-P264，2件組)萬",
    "PublicArt_Unit": "高雄市政府體育處",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "周明鎮、吳旭峰、吳守哲、侯淑姿、許崇堯",
    "PublicArt_SelectTeam": "周明鎮、吳旭峰、盧明德、侯淑姿、陳建北、陳水財、蘇志徹",
    "PublicArt_Desc": "『乘風』以飛行傘為題，將翔鷹取代傘，翔鷹在空中結合科學與藝術是進化的結晶。可以很優雅的巡航，也可以犀利的獵殺，集合力與美於一身，是運動員的終極形象。 『破浪』用衝浪為題將海豚取代衝浪板，鯨豚與人的互動，建立於愛與信任之中。這種關係可以擴大到許多動物，甚至野生動物，能和平的對待異類，才會和平的對待同類，這是文明的象徵，也是運動家的精神。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704203424778.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "c29e91ce-d4a0-40ce-937b-ac9332b9ab1a",
    "PublicArt_Name": "晴雨兩相宜",
    "PublicArt_Author": "潘大謙",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1、555 × 600cm 　2、320 × 520cm 　3、543 × 520cm",
    "PublicArt_Type": "數位影像 - 數位影像玻璃",
    "PublicArt_Material": "數位直印玻璃膠合、金屬固定件",
    "PublicArt_Place": "高雄市前金區中正4路192-1號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "作品設置於站體通風井的兩個側立面（左外側立面555×600㎝、左內側立面320×520㎝）與正立面上方（543×520㎝）之壁面，利用鏡面玻璃印刷棕梠樹圖案，鏡面玻璃反射真實的天空，而亞熱帶的棕梠樹叢綠意盎然，充滿生機與活力，形成環境意象真假的辯正，不管玻璃倒影的是何種氣候，無論晴雨、酷熱或寒冷，綠色的樹木都會為高雄創造一個鮮明的意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621155958072.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3a258bd1-27ab-476f-9542-9b14f75935a6",
    "PublicArt_Name": "搖曳於舞人間",
    "PublicArt_Author": "董振平",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170 × 11cm，面積28.56m2",
    "PublicArt_Type": "玻璃 - 強化玻璃",
    "PublicArt_Material": "融合玻璃、玻璃噴砂、玻璃色粉、玻璃拉棒、金屬固定件、玻璃盒、LED燈",
    "PublicArt_Place": "高雄市鼓山區臨海2路17-1號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "作品以常民舞姿為主軸，雙手高舉迎風而降的人體在西子灣浪花中翩然起舞。耀動的色彩、閃爍的光影、徜徉於山海、陸地之間，牽引出舞動的線性結構，突顯作品的愉悅感。 作者運用與海水、陸地、山景、火焰有關的紫藍、桃紅、橙橘、檸檬黃等透明與不透明融合玻璃，經由白色底調烘托出西子灣特異的風俗民情。展現人與山海陸地間的互動形式與地域情節。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704204516807.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "ac55a233-f33f-45c0-ad81-9d68b4b2e9ae",
    "PublicArt_Name": "築夢時代",
    "PublicArt_Author": "尤瑪．達陸",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "600 × 220cm",
    "PublicArt_Type": "",
    "PublicArt_Material": "苧麻、羊毛、瓊麻、石材",
    "PublicArt_Place": "高雄市前鎮區中山3路150號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "作品形式來自原住民織品的方型樣態，表現的內容則是原鄉的風土：山林、土地、流水、藍天和風。各方人士集居在都市，懷抱著逐夢理想，形成一個個的築夢基地。築夢有歡悅有困頓，此時受敬的山林，成為族人身心的舒放搖籃，在歇息後凝聚更多冒險的動力，以追逐下一個夢想。故作品融合原住民過去與現代的纖維編織技藝與質材美感，其中所萃取的是原住民對自然色彩與勞動的美學。材質係以傳統苧麻材質為基礎，並以手染的有色羊毛紗加以編、織、捆、札，讓作品擁有弧線、直線、軟硬、深淺、緊張與鬆弛的對比節奏，也反應自然的有機性及量化後的質感力度，藉由簡潔的造型、樸素的材質，表達單純形成的華麗和豐美。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704204003786.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "2733f9aa-b127-43cb-aff1-9269be113afd",
    "PublicArt_Name": "橙色記憶",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "作品：300 × 200 × 450cm，基座：400 × 300 × 150cm",
    "PublicArt_Type": "",
    "PublicArt_Material": "FRP外表汽車漆冷烤，水泥基座",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "165.2萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "秉持尊重大寮自然生態環境特點的記憶，與當代文化、人文特色的概念下，營造具時代表現意義的記憶新象",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704204833544.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "4010e8d1-e63c-41aa-96c9-947d82608c8d",
    "PublicArt_Name": "南島物語",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "180 × 180 × 450cm",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鐵件、外表環氧樹脂烤漆",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "136.7萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "《南島物語》以擬境與擬態複合式手法，擷取源自植物生態之基本造型，注重「多元與融合」之精神，賦予大寮站豐富南島物語的標誌意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171417856.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3e46f916-c418-4a70-8f79-9851e979bc10",
    "PublicArt_Name": "天工開物",
    "PublicArt_Author": "朱邦雄",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "120 × 900 × 50cm",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶土",
    "PublicArt_Place": "高雄市橋頭區站前街12-1號",
    "PublicArt_Funds": "300萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "橋頭糖廠為臺灣第一座現代化機械製糖廠，帶動臺灣工業製造業、商業、交通、農業，乃至教育蓬勃發展，具「開物之先」的深刻意涵；作品結合人文、藝術、設計、陶瓷工學、科技工業等多元性靈智的範疇，以巨大的勞動力量創造了陶壁公共藝術，堪稱「巧奪天工」。以「天工」詮釋「開物」，正是藝術家為橋頭土地譜寫的動人謳歌。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145425279.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145425403.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9c4380e9-b682-451d-8e7a-9a460860b549",
    "PublicArt_Name": "花間夢遊",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "168 × 354cm (單位:公分)",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "原色不銹鋼板5.0mm加工型彩繪",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "18.59萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "於車站動線要道上，以鮮明歡悅的色彩溶接如織的花卉與藤蔓，營造旅客快速流動下的驛站轉運視覺特色。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704204212551.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3bff1a3e-6e50-47ac-bb47-3f92f40d9af3",
    "PublicArt_Name": "萬里晴空見高雄",
    "PublicArt_Author": "潘大謙",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 300cm，面積50.4m2",
    "PublicArt_Type": "數位影像 - 數位影像玻璃",
    "PublicArt_Material": "數位直印玻璃膠合、金屬固定件",
    "PublicArt_Place": "高雄市前金區中正4路192-1號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "在站體內樓梯前方牆璧安裝300㎝×1680㎝鏡面玻璃，上半部印刷晴空萬里的高雄地標建築合成圖像，構成一帶狀的天際線，天際線漸層連接下方鏡面玻璃反射人潮離開捷運的景象。當捷運乘客沿著階梯拾級而上，影入眼簾必先看到美麗的長空，然後辨認出高雄的天際線，接著自己的身影倒影在鏡面玻璃，形成一次把天空、高雄與人自身的接連想像過程。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621155916085.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "2e2658ef-9720-4868-b3f0-4056b3dc43ce",
    "PublicArt_Name": "鳳林之光",
    "PublicArt_Author": "丁水泉",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "160 × 60 × 350cm、160 × 60 × 300cm、160 × 60 × 280cm（共2座）、160 × 60 × 250cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "大理石、不銹鋼",
    "PublicArt_Place": "高雄市新興區七賢二路95-1號3樓",
    "PublicArt_Funds": "218.72萬",
    "PublicArt_Unit": "高雄市立鳳林國中",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "洪信志、陳雪妮、蘇連陣、李億勳、劉木賢、王文霖",
    "PublicArt_SelectTeam": "盧明德、賴新龍、林熹俊、劉木賢、蘇連陣、林右正、林大維",
    "PublicArt_Desc": "在我們文化中在原始認知中水與魚的搭配常用來象徵財富，中國人喜歡魚，並賦予它吉祥的象徵，人們用年年有魚(餘)，來寄託對未來期望，也是豐收與財富的隱喻。此創作是以魚的吉祥意義來表現對紅毛港未來繁榮的期待。波浪形拱門的造型是由魚的形象轉化形成，呈現優遊自在的氛圍。彩色的圓球其位置正是魚的眼睛，此設計是象徵鳳林傑出的撞球運動。將代表紅毛港的魚之意象和撞球運動的象徵融入作品之中，呈現作品多樣化的思考。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195724720.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3f70ed60-9338-42da-8359-40d04b6ac6e4",
    "PublicArt_Name": "生命記憶的編織",
    "PublicArt_Author": "雷恩",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "500 × 600 × 700cm",
    "PublicArt_Type": "",
    "PublicArt_Material": "鋼筋地錨",
    "PublicArt_Place": "高雄市前鎮區翠亨北路390號",
    "PublicArt_Funds": "114萬元",
    "PublicArt_Unit": "高雄市政府原住民事務委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "俄鄧‧殷艾、雷賜、蘇信義、江冠勳、陳偉、林子森、陳幸雄",
    "PublicArt_SelectTeam": "俄鄧‧殷艾、林子森、蘇信義、陳偉、張蕙蘭、江冠勳",
    "PublicArt_Desc": "群組作品為呼應全台灣原住民族群的數目，故設計為十三件分布在設置區域內。作品意涵以「編織」、「承載族群生命記憶的織帶」為出發點，將作品視為留存各族群生命記憶的承載體，形成方式由團隊在設置期間徵得各族群有代表意義之內容，例如：家名、特殊人物之人名、特有圖騰、耆老腳印、特殊意義之影像等，交由創作團隊以金屬浮雕、鏤空、木板浮雕及燒製陶板的方式加入在專屬於該族群街道傢具（椅子）作品內，讓各族群的生命記憶在設置區域內藉由街道傢具的被使用而被分享。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115828812.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115829136.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115827663.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115829328.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115828527.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115829619.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115828919.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115829028.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115828712.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115827412.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622115829510.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3268b575-5f39-4cbf-b14a-37fc722ac12f",
    "PublicArt_Name": "共生翠樹",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "作品：180 × 180 × 700cm\r\n基座：300 × 300 × 150cm",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鐵件、外表環氧樹脂烤漆，水泥基座",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "142.4萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "《共生翠樹》運用多樣性的人文錯綜交流，面對多元文化的融合，共生與自然生態的關懷議題，引發人類省思自然、環境與文化三者間之互動關係。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171304604.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a7692be8-ee6e-4741-b789-38c0f0510e05",
    "PublicArt_Name": "工業的力量",
    "PublicArt_Author": "蔚龍藝術有限公司",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1020 × 1390cm",
    "PublicArt_Type": "數位影像 - 數位影像印刷",
    "PublicArt_Material": "數位影像印刷、強化膠合玻璃、金屬結構",
    "PublicArt_Place": "高雄市楠梓區加昌路598號",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "盧明德、許自貴、蘇信義、盧友義、陳坤崙、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、許自貴、石瑞仁、黃位政、陳泓易、蘇信義、陳惠婷",
    "PublicArt_Desc": "擷取並轉換「加工業產品」的直接影像，來詮釋此區域市民的生活內涵，是本站「工業的力量」的公共藝術發想途徑。運用「加工品」-如生活電器、工具機、腳踏車、醫療器材等產品的單元組合影像，來顯示零配件之組裝意象。這個高度透視性、重疊感、具超現實尺度感的巨大X光學透視影像，在數位科技時代裡，促使「人」與「物」的角色置換。在收票機、站務室、通道、柱廊、樓梯、電梯及手扶梯所構成的透明空間之中，這個影像裝置引領旅客像細小零配件般，穿梭在工業影像的叢林之間，使得冷峻的工業語彙頓時衍生為科技時尚的張力，也使得「加工業」細緻的生產過程，由工業的力量轉化為生活美感的表現。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145208234.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145208725.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145207313.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "447a5754-3b95-4388-9d15-39d232af05de",
    "PublicArt_Name": "匯聚四方",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1439.5 × 170cm，面積24.48m2",
    "PublicArt_Type": "",
    "PublicArt_Material": "烤漆金屬板、FRP造型烤漆、雷射切割烤漆金屬板",
    "PublicArt_Place": "高雄市新興區中正3路32之1號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "「匯聚四方」座落於捷運信義國小站，本站是以小學命名的站體，位處於高雄中心地帶。從宏觀的角度來看，高雄市如同一個家庭，以孩子為中心，而孩子就是高雄未來的希望，捷運通車後，孩子以欣欣向榮的姿態，藉著捷運的便捷，邁向城市的流動，如同城市的新血，活絡高雄的熱情。 作品以四道窗口，有如任意門一般，通往捷運四個方向的城市景觀，以懸掛的立體雕塑為視覺引導，超現實般的深入壁面轉換成多層次景色，背景左以清晨、午時、黃昏、夜色四景，代表捷運以點對點的方式，可以在一日之內迅速穿梭高雄整個城市。作品寓意捷運不僅是活躍高雄的脈動，更具有深耕在地認同與情誼的功能，讓捷運的旅程在孩童成長過程中，充滿色彩與造型的回憶。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200135666.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "91a6a158-992c-4d47-9efd-3a99848b576b",
    "PublicArt_Name": "臺灣文學掌燈人—葉石濤的螞蟻歲月",
    "PublicArt_Author": "王秀杞",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1. 巨書：390 × 135 × 220cm，600kg、2. 葉石濤與小女孩組：250 × 50 × 145cm，450kg、3. 小男孩與狗：45 × 45 × 130cm，60kg",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "銅、黑鐵、花崗石",
    "PublicArt_Place": "高雄市前金區民生2路80號",
    "PublicArt_Funds": "270萬",
    "PublicArt_Unit": "高雄市立圖書館",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "施純福、謝佩霓、顏名宏、李億勳、蘇信義、許一男、曾貴海、鄭烱明、彭瑞金",
    "PublicArt_SelectTeam": "施純福、謝佩霓、顏名宏、李億勳、蘇信義、許一男、曾貴海、鄭烱明、彭瑞金",
    "PublicArt_Desc": "臺灣文學大師葉石濤先生一生著作等身，對臺灣文學貢獻深遠，本件創作為表達對葉老之懷念與尊敬，以一本巨書，摘錄葉石濤先生著名文句，在巨書之前，葉老和兩位小學童的互動畫面，和藹可親、平易近人、生活化的一面。具像寫實，與觀者互動親和。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200227587.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "ffc6d63a-7c01-4c5e-a779-3c8b1e9c9d02",
    "PublicArt_Name": "純淨的百合",
    "PublicArt_Author": "哈拿‧葛琉",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "86㎡ (單位:公分)",
    "PublicArt_Type": "陶瓷 - 瓷磚",
    "PublicArt_Material": "版岩及窯磚舖磚面拼貼",
    "PublicArt_Place": "高雄市前鎮區翠亨北路390",
    "PublicArt_Funds": "90.5萬",
    "PublicArt_Unit": "高雄市政府原住民事務委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "俄鄧‧殷艾、雷賜、蘇信義、江冠勳、陳偉、林子森、陳幸雄",
    "PublicArt_SelectTeam": "俄鄧‧殷艾、林子森、蘇信義、陳偉、張蕙蘭、江冠勳",
    "PublicArt_Desc": "本作品為女性藝術家的創作，作者以台灣原住民族群中象徵純潔與高貴的「百合花」為主題，取彩色窯磚做為拼貼的素材，一則更替設置點原有狀況不佳的黑色頁岩鋪面，再則嘗試以鑲嵌、拼貼的表現方式，轉化原住民在圖騰與衣飾上的傳統藝術手法。 本件作品設置於高雄市原民會建築物一樓兩側入口前的石板鋪面過道處，以飄逸律動的曲線，將百合與海浪的意象，與原住民圖騰藝術中延展、對稱與變化的美學語法整合、對話。 除了傳統文化中的純淨與聖傑象徵之外，作者認為百合也散發了巨大的寧靜力量，這股力量超越了傳統社會與倫理的表層政治性階序與規範，而成為心靈平息及生命依附的歸宿。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621173213164.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "23159a2a-9eba-41e3-a33f-31424b4562f7",
    "PublicArt_Name": "未來之眼",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "作品：300 × 300 × 300cm\r\n基座：60 × 60 × 120cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、鐵件、氟碳烤漆、LED燈\r\n水泥基座",
    "PublicArt_Place": "高雄市前金區中山1路11號地下1層",
    "PublicArt_Funds": "700(P304-P305，2件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "中央公園是城市的心臟地帶。整體造型以高雄未來的遠瞻為出發，圓形之眼象徵城市的流動與轉變，反應自然和城市人文的生生不息，夜間閃爍同心的雙圓燈光，映射著高雄的斑斕光輝，表現和高雄同心、世界同心。「未來之眼」象徵進步及優越的領航，引領高雄與世界緊密的連結，成為通往世界的羅盤。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163422225.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163420510.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163421394.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "1fd7bc7c-2b10-4ffd-8a60-31fcd76318f3",
    "PublicArt_Name": "綠色啟示",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "作品：350 × 325 × 250cm，基座：600 × 400 × 150cm",
    "PublicArt_Type": "",
    "PublicArt_Material": "FRP外表汽車漆冷烤 ，水泥基座",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "165.2萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "以豐碩水果、蔬菜等植物圖鑑造型的共生、融合模式，隱喻以寬廣包容的胸懷與視野，由面對人類自然、環境與文化間的互動關係獲得生命啟示。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171242010.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5728f01c-ca56-48fe-98b3-23d9ce1ea37c",
    "PublicArt_Name": "鳳凰華韻",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "248 × 864cm",
    "PublicArt_Type": "",
    "PublicArt_Material": "亮白金屬板5.0mm耐候型彩繪",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "18.59萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "以多樣性的花卉、朱雀、蜂蝶交織而成的《鳳凰華韻》象徵多元文化的融合，進而延伸以自然生態議題致使人類省思自然、環境與文化三者共生之重要性。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200312401.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "72aa91be-ebeb-4476-a73a-0c2dc62af36d",
    "PublicArt_Name": "多向度聚場",
    "PublicArt_Author": "洪龍木",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1320 × 170cm",
    "PublicArt_Type": "",
    "PublicArt_Material": "低碳鋼.氟碳烤漆金屬物件",
    "PublicArt_Place": "高雄市沿海1路280號地下1樓",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "藝術家以卡漫精神轉換小港工業城，使其成為一個輕鬆幽默的生活城鎮。他以陸、海、空等事物之形象，進行圖像與造形的交換、轉接與融合，如負載力強的大象結合機翼、自由的海豚加入鳥羽、快馬接遞貨輪、翔鷹附上奔騰馬腳、悠遊的鯨魚裝上輪軌、海鳥化身魚尾等，呈現小港地區的多向度中介形象，使乘客回眸駐足凝視，也拉近了彼此的距離。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172832800.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a8157013-ebe8-4aa0-a24f-0eaaacab59d8",
    "PublicArt_Name": "樹的回憶",
    "PublicArt_Author": "黃裕榮 、 駱信昌 、 黃裕和",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "400 × 180 × 150cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "黑白大理石、不銹鋼",
    "PublicArt_Place": "高雄市鼓山區大順1路858號",
    "PublicArt_Funds": "390(P265-P266，2件組)萬",
    "PublicArt_Unit": "高雄市龍華國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、吳梅嵩、許一男、陳明輝、王瑞裕、郭鈴惠、黃建興",
    "PublicArt_SelectTeam": "吳梅嵩、許一男、黃建興、陳水財、陳立民、陳雪妮、賴新龍",
    "PublicArt_Desc": "以樹為故事的開端 蔓延著龍華國小的記憶與未來 而大地上的符號 意涵有多少的疑問存在，日後就會有多少的讚嘆與驚嘆 鼓勵學童熱中觀察事物。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200420820.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3de18ca3-d698-4359-9a26-0f2f08470693",
    "PublicArt_Name": "愛之旅",
    "PublicArt_Author": "簡明輝",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "搖滾巨星：120 × 120 × 250cm、\r\n吉他手：150 × 130 × 250cm、\r\n薩科斯風手：150 × 130 × 230cm、\r\n鼓男：140 × 120 × 200cm、\r\n小提琴手：120 × 100 × 220cm、\r\n姿勢一：230 × 80 × 190cm、\r\n姿勢二：200 × 150 × 200cm、\r\n姿勢三：180 × 130 × 260cm、\r\n姿勢四：18",
    "PublicArt_Type": "其他 - 太陽能板",
    "PublicArt_Material": "熱浸辛鋼材、不飽和聚脂樹脂、氟碳漆、環氧樹脂、太陽能版、LED燈",
    "PublicArt_Place": "高雄市前金區",
    "PublicArt_Funds": "460萬",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "洪明宏、吳淑明、蘇志徹、賴新龍、劉秀梅",
    "PublicArt_SelectTeam": "黃俊熹、蘇志徹、陳水財、賴新龍、方惠光、吳旭峰、張惠蘭",
    "PublicArt_Desc": "《愛之旅》是一件借助空氣浮力原理的作品，浮力讓作品隨著水波盪漾而體態多變，增加音樂與舞蹈人物造型的韻律感與節奏感。人們可見曼妙舞姿於水中倒影，可感受薩克斯風、定音鼓、小提琴、吉他等水上樂團所演奏的天籟之音自河中飄來，而河岸的藝術路燈，則像是忠實的觀眾，永遠以最熱忱的燈光掌聲回應水道中的藝術家；最後，以所創造的「魚屋」、「鳥的休息站」，再加上自然的「風之舞」、「水之樂」，共同譜出「愛河」的幸福感人戀曲 ──《愛之旅》。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621160118840.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621160119872.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120803110402534.JPG",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621160120538.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621160119573.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621160118140.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621160117949.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621160117773.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621160119306.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7dd74af0-58a2-4a25-8674-0f79044ff8b0",
    "PublicArt_Name": "綠動",
    "PublicArt_Author": "范姜明道",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "（144～153）×（58～64）×（70～95）cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "大白花花崗岩、深灰色花崗岩",
    "PublicArt_Place": "高雄市左營區中海路200號",
    "PublicArt_Funds": "600萬",
    "PublicArt_Unit": "行政院體育委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "楊明州、胡啓邦、翁英惠、盧明德、吳啟光、陳雪妮、黃敏禎、林立平、趙建銘、劉培森、郭中端",
    "PublicArt_SelectTeam": "劉培森、郭中端、楊文霓、倪再沁、陳建北、蘇志徹、曲德義",
    "PublicArt_Desc": "為呼應世界運動會之運動精神，以「裸足」形體，強調運動回歸自我的概念，人類以腳行動，腳踝是接觸地面最直接的部位，一切運動的起點、人類立足的根本。並以白腳丫與綠色植物結合象徵環保永續精神，並在色彩與結構上配合週遭環境，也讓腳丫動線成為引導群眾進入會場的指標。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153938623.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153937825.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153938053.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153938757.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "b5324ab3-cd45-4505-a6c7-01c8b175eaef",
    "PublicArt_Name": "幸福旅遊",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "作品：1000 × 50 × 250cm，基座：1500 × 100 × 60cm",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鐵件、外表環氧樹脂烤漆，水泥基座",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "37.7萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "以今日的大寮豐饒盛產之田園交響曲符號意象，塑造車站「迎賓歡聚」的幸福感。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171200972.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "660f07e4-aa8a-4495-8d0b-038320fbfe72",
    "PublicArt_Name": "草衙聚焦",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm",
    "PublicArt_Type": "數位影像 - 數位影像玻璃",
    "PublicArt_Material": "數位影像輸出、強化膠合玻璃",
    "PublicArt_Place": "高雄市前鎮區中山四路及中安路口一帶",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "草衙，聚焦高雄精神的所在。這裡，聚集了各行各業的人們，也匯聚了許多觸動人心的故事。離鄉背井在此落地生根的原住民、樂天知命的討海漁人、認真打拼的建築工人…這些精彩的在地文化，不斷在市民的生活中層層積累，形成草衙豐厚的文化基底。作品以民眾訪談互動計畫，深入草衙各地，找尋各行各業的動人故事；再以文字、攝影、紀錄片等方式描繪出草衙的樣貌。藉由《草衙聚焦》，我們將看見在草衙的日常生活中，感動人心的一刻。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200536910.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0b46d57e-f541-4dc7-a3e9-10c6026920f9",
    "PublicArt_Name": "遊戲的心",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "120 × 120cm（共4件）",
    "PublicArt_Type": "其他 - 光柵板",
    "PublicArt_Material": "光柵板",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "23.9萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "於光柵板立體幻影景深效果下，若隱若現的兔子與母雞穿梭於可愛的花朵間，宛如童年遊戲記憶再現，為忙碌的驛站增添一股輕鬆愉快的氣氛。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171754151.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171754292.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171753296.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171754434.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a7d1f782-88e1-42b2-b7a6-0ae63b21aca1",
    "PublicArt_Name": "光之穹頂",
    "PublicArt_Author": "水仙",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "6000 × 6000 × 3000cm，面積 660 m2",
    "PublicArt_Type": "玻璃 - 強化玻璃",
    "PublicArt_Material": "玻璃",
    "PublicArt_Place": "高雄市新興區中山一路115號(美麗島站)",
    "PublicArt_Funds": "2000萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "您的鑰匙時光如風火焰，生命空靈的氣息光之輪，讓我們的生命作夢！人類作夢吧！讓夢中光塵滋潤太空中浩瀚的河流。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622111621611.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622111620436.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622111624258.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622111621744.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622111621910.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622111621444.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622111623858.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622111622917.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "4e639503-f78e-47be-b547-12958fba3155",
    "PublicArt_Name": "交融與共構",
    "PublicArt_Author": "林珮淳",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "2858 × 300 × 858cm",
    "PublicArt_Type": "其他 - 壓克力",
    "PublicArt_Material": "壓克力板、金屬固定架、數位噴畫",
    "PublicArt_Place": "高雄市橋頭區站前街12-1號",
    "PublicArt_Funds": "900(P318-P321，4件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "透過作品的切面曲線及造型，來強調橋頭地區的細膩柔軟而豐富的生命轉變，當通過走道前往搭乘捷運時，象徵通向有生命力的「自然生態」圖像，又當通過走到欲回歸時，象徵有別於其他鄉鎮的「在地文化」圖騰。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145702569.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145702677.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145701616.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "c973267b-f466-4569-9fd6-14e1a11203a4",
    "PublicArt_Name": "向前走",
    "PublicArt_Author": "膺格斯‧伊第",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "502 × 224 × 245cm",
    "PublicArt_Type": "",
    "PublicArt_Material": "鋼筋、FRP、塑料",
    "PublicArt_Place": "高雄市左營區中海路200號",
    "PublicArt_Funds": "600萬",
    "PublicArt_Unit": "行政院體育委員會",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "楊明州、胡啓邦、翁英惠、盧明德、吳啟光、陳雪妮、黃敏禎、林立平、趙建銘、劉培森、郭中端",
    "PublicArt_SelectTeam": "劉培森、郭中端、楊文霓、倪再沁、陳建北、蘇志徹、曲德義",
    "PublicArt_Desc": "雕塑《Let’s Go!》是一個介於球體，汽車，以及一隻巨大運動鞋的混合體。它可以理解為是一支非凡的運動隊的汽車；或是一塊抽象的，被投射到場館外部的場館內部結構。 形體、材質、顏色及圖樣，充滿來自於運動的動態的美感，體現出場館前廳入口和內部構造的完美交互。融合完全不同的的內容和造型，在內部和外部，動態和靜態，以及功能和造型之間，產生出奇的互動效果。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621152619330.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621152618583.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "f0bb5a80-c24d-4c43-9f21-158216b8058d",
    "PublicArt_Name": "豐饒覺醒",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "150 × 100cm",
    "PublicArt_Type": "其他 - 光柵板",
    "PublicArt_Material": "光柵板",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "12.5萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "「豐饒覺醒」以巨大的天堂鳥造形，矗立於人工意象的花叢間。光柵誇張景深的效果將城鄉混合、互滲輝映的科技美感，注入大寮站的公共空間，進而突顯在地文化與城市變革下的關懷與認同。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171827104.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "f30d4b47-7042-48d7-a309-19de0d7f6d16",
    "PublicArt_Name": "蔓延的愛（3）",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "同電梯尺寸",
    "PublicArt_Type": "",
    "PublicArt_Material": "MP透明片正貼 3MIJ3650-114/3M8519, Anti-UV transparent laminating film",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "23.9萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "當透明電梯快速運送旅客的同時，每一次的開合都代表當地與外界的連結，共生植物圖像以單純之姿蔓延於外圍玻璃上，使乘客於進出電梯的短時間內，立即感受特有的生態氛圍。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171518846.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "e2012201-e827-4165-8cf3-1dcb4a5d8ff3",
    "PublicArt_Name": "臺灣西打—鹽庭尋常榜",
    "PublicArt_Author": "梅丁衍",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm，面積28.56m2",
    "PublicArt_Type": "數位影像 - 數位影像玻璃",
    "PublicArt_Material": "數位直印膠合玻璃、LED燈",
    "PublicArt_Place": "高雄市鹽埕區大勇路96號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "「臺灣西打」是以臺灣坊間存留的影像與文物作為表現題材，旨在緬懷在地風情，凝聚集體認同意識。「鹽庭尋常榜」則是針對高雄鹽埕地區五十年之前的繁華況味作為創作發想 ，此處「尋常」是指由日常生活中的細鎖事物回溯常民史的意義。畫面中的人物來自鹽埕地區的老照片，除服飾保留原樣之外，臉龐則為虛擬。畫面背景為大鹽珵區已銷跡的老建築，如具人文氣息的高雄劇場、老鹽埕町市場、高雄市役所(今歷史博物館)、高雄州廳、老興業信用合作社、碼頭倉庫等。 本作品採「後現代式」的生活集錦表現，以電腦繪圖技法將不同時代風格統合，並以類似舞臺效果表現豔俗的樸直感，融合歷史多元化的統一美感。本作品試圖從殘留的集體記憶中，補捉幽微歷史的榮耀，讓「歷史的公共性」成為全民關注的話題。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621155605225.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621155603473.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621155603266.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621155605737.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621155605425.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621155604326.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "71605791-cc1c-42d8-a2a8-87a103e32043",
    "PublicArt_Name": "港都懷舊 捷運新遊",
    "PublicArt_Author": "董陽孜",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "720 × 170cm（共2面）",
    "PublicArt_Type": "其他 - LED燈",
    "PublicArt_Material": "LED燈、強化玻璃",
    "PublicArt_Place": "高雄市三民區建國二路320號地下一層",
    "PublicArt_Funds": "150萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "高雄車站，充滿人們聚散離合的回憶，是本地深具歷史意義的地標。隨著捷運開通，百年風華的高雄車站，面臨了全新的轉變與創新。臺灣經濟發展蓬勃，生活的物質水準逐漸改善，而珍貴的自然資源、人文歷史…卻也隨著時間慢慢消逝。在這新舊時代交會場域，我們邁開大步前行、也開始關注過往。有感於此，因而引用老子道德經：「知其白，守其黑」為創作內容—雖知何謂清白豁亮，但仍以謙卑的態度緩步向前，拋開已有知學而虛心待知。這正提醒著人們立足歷史、前瞻未來，於過去與現在之間取得相對應的平衡，方能望見生命的燦爛與可能。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704204739406.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "ddbd57a0-db40-4099-9eed-89533d56227c",
    "PublicArt_Name": "半屏山之魂",
    "PublicArt_Author": "Wood Janssen Incorporated",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "面積 922 m2 (單位:公分)",
    "PublicArt_Type": "數位影像 - 數位影像玻璃",
    "PublicArt_Material": "數位影像輸出、強化膠合玻璃",
    "PublicArt_Place": "高雄市楠梓區宏南里1鄰左楠路1號 R17世運站",
    "PublicArt_Funds": "2000萬元",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "本件作品將世運占這個龐大的站體，輕巧的轉換為成宛如飄浮在空中的雨林，將過往曾經存在及目前尚存於南台灣的昆蟲、植物等自然景觀呈現於塑造出的雨林景象當中。為的是提醒人們，因為全球暖化的關係，雨林的動植物們，正在一天天地減少當中，寶貴的保存既有的，也緬懷過往的。這件有如巨大帷幕般的公共藝術，分布在R17捷運世運站內各處;軌道上方的天窗、月台層、穿台層東西兩側的玻璃帷幕，讓其全部呈現在同一時空畫面裡。讓乘客行經各處，得以感受到這件作品的意涵，正是象徵我們南台灣人與土地之間的故鄉情懷。\r\n世運站為紅線由南向北穿越半屏山後的第一個高架站，鄰近左營海軍軍區，站體外觀設計成「海上雄獅，揚帆待發」之風貌;走進站體內，更是別有洞天，巨大的公共藝術作品分布在車站的採光天窗、車站主體側牆以及電扶梯，而藝術玻璃上更是處處可見花草、樹木、森林殘影等蹤跡，將讓人錯覺彷彿置身半屏山生態綠林步道之中。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622103658246.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "55be70c4-62f3-4f69-b602-8df8aa74bfd6",
    "PublicArt_Name": "生命的力量",
    "PublicArt_Author": "蘇志徹 、 林麗華",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1. 380 × 200 × 168cm2. 400 × 130 × 200cm3. 400 × 100 × 187cm",
    "PublicArt_Type": "",
    "PublicArt_Material": "鍍鋅鋼板烤漆、FRP",
    "PublicArt_Place": "高雄市楠梓區惠豐里009鄰高楠公路1835號",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "盧明德、許自貴、蘇信義、盧友義、陳坤崙、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、許自貴、石瑞仁、黃位政、陳泓易、蘇信義、陳惠婷",
    "PublicArt_Desc": "在都市叢林的夾縫中尋找空間的綠色精靈企圖喚醒習於被建築物包覆的冷漠新生代期待追逐時間的過客於短暫逗留的過程中思考生命的更替和永恆之間的法則與意義座椅+建築+雕塑+人=激發\"生命力\"的空間",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145619507.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145618893.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145619131.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "05d18fd0-6cce-437d-801b-8dfce21b81af",
    "PublicArt_Name": "一二三四再來一次Ⅰ",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1680 × 170cm，面積28.56m2",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、LED燈、感應器",
    "PublicArt_Place": "高雄市苓雅區中正1路99號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "複合媒材之形式意義-“I see , then I am”召喚觀者成為作品之一部分。作品重覆、再製，橫向排開數個片段，紀錄運動模式中不同時間的存在狀態-位移方式；行為模式，縱使一再重覆，每一次所佔據的時間的唯一性，被「形式」硬生生的擷取了下來。 活著的行為之存在事實，在形式的模擬下，一再被觀者（民眾）主觀的重新建構著，介於真實與虛構之間。在這樣的創作理念下，與其說個人的創作世界是一種“美感形式”：我更希望它是源自藝術主體精神發散的結果。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120719133512896.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8a6a5f42-e73b-4ef1-92ce-91028a13a7b7",
    "PublicArt_Name": "半屏新綠",
    "PublicArt_Author": "戴威利",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "地面圓形墩柱體：直徑200 × 高170 × 圓周長628cm（共8件）",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "玻璃馬賽克、彩色玻璃、亮彩琉璃、玻璃珠、瓷磚馬賽克",
    "PublicArt_Place": "高雄市楠梓區宏南里1鄰左楠路6號",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "盧明德、許自貴、蘇信義、盧友義、陳坤崙、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、許自貴、石瑞仁、黃位政、陳泓易、蘇信義、陳惠婷",
    "PublicArt_Desc": "畫面中由多彩馬賽克鑲嵌構成之彩色半邊色塊面，充分象徵著半屏山文字想像與圖像表達，抽象之半屏山色塊以藝術性詮釋著此地之人文地理特質，引發觀者無限想像，並在八根地面圓形墩柱體圓周，分別形成圖像與視覺上不同之變化，構成具有故事性與節奏感之整組作品。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145502279.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145502223.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145503165.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "b70ec1bb-41a9-45c5-87a4-6b7ee057df08",
    "PublicArt_Name": "蔓延的愛（1）（2）",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "60 × 60cm（共2件）",
    "PublicArt_Type": "",
    "PublicArt_Material": "MP透明片正貼 3M IJ3650-114/3M8519 Anti-UV transparent laminating film",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "26.23萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "當電梯快速運送旅客的同時，每一次的開合都代表當地與外界的連結，共生植物圖像以蔓延之姿攀爬外圍玻璃上，使乘客於進出電梯的短時間內，立即感受特有的生態氛圍。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171039955.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171040496.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "171982be-496f-4710-88b5-7621dc7f7dd5",
    "PublicArt_Name": "寧靜的巨大",
    "PublicArt_Author": "哈拿‧葛琉",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "86㎡",
    "PublicArt_Type": "陶瓷 - 瓷磚",
    "PublicArt_Material": "版岩及窯磚舖磚面拼貼",
    "PublicArt_Place": "高雄市前鎮區翠亨北路390號",
    "PublicArt_Funds": "90.5萬元",
    "PublicArt_Unit": "高雄市政府原住民事務委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "俄鄧‧殷艾、雷賜、蘇信義、江冠勳、陳偉、林子森、陳幸雄",
    "PublicArt_SelectTeam": "俄鄧‧殷艾、林子森、蘇信義、陳偉、張蕙蘭、江冠勳",
    "PublicArt_Desc": "本作品為女性藝術家的創作，作者以台灣原住民族群中象徵純潔與高貴的「百合花」為主題，取彩色窯磚做為拼貼的素材，一則更替設置點原有狀況不佳的黑色頁岩鋪面，再則嘗試以鑲嵌、拼貼的表現方式，轉化原住民在圖騰與衣飾上的傳統藝術手法。 本件作品設置於高雄市原民會建築物一樓兩側入口前的石板鋪面過道處，以飄逸律動的曲線，將百合與海浪的意象，與原住民圖騰藝術中延展、對稱與變化的美學語法整合、對話。 除了傳統文化中的純淨與聖傑象徵之外，作者認為百合也散發了巨大的寧靜力量，這股力量超越了傳統社會與倫理的表層政治性階序與規範，而成為心靈平息及生命依附的歸宿。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120719133053623.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "27c10f6b-2e57-4894-ab8d-7bd5ea2c890d",
    "PublicArt_Name": "鳳臨天下",
    "PublicArt_Author": "蕭聖建",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "600 × 280 × 200cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不繡鋼管、沙鈴、影像互動裝置、偏心馬達、光線感應器",
    "PublicArt_Place": "高雄市鳳山區自由路281號地下一層",
    "PublicArt_Funds": "720(P323-P325，3件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "《鳳臨天下》以鳳鳥臨空翩然而下的意象，呼應了有關於鳳山地名由來的古老傳說。以不鏽鋼管做為主要的材質，正好和捷運站入口處所大量使用的不鏽鋼和玻璃材質相互呼應。簡潔流暢有如書法行草般有機又滑順的線條，帶入了東方特有的意境和情感，化解了金屬和玻璃建築原有的冰冷感。作品能和現場的旅客互動而產生此起彼落的沙鈴聲，就像是在與鳳互動和鳴共舞一般，拉近了民眾與藝術品之間的距離。「鳳臨天下」屬於立體作品，可有全方位不同角度觀賞的美感與呈現，入口動線所見到的是鳳鳥臨空翩然而下的意象，出口動線可領略鳳鳥盤旋遨遊的姿態，其漸漸貼近回家或出站的遊客，帶著吉祥與好運，指引回家的路。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704204640315.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3eb93d79-2885-440f-8b43-6d20e680ec2d",
    "PublicArt_Name": "出入平安",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "140 × 140cm，〈共4件〉，面積7.84m2",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "馬賽克鑲嵌、金屬邊框",
    "PublicArt_Place": "高雄市新興區中正2路45號地下1層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "高雄市文化中心捷運站周圍學校林立，更有充滿時尚氣息的大統百貨公司，是高雄市的文教交會區。捷運站為民眾交通往來頻繁之樞紐與節點，藉由民眾所攜帶之行囊，由古至今之造型演變（包袱手提箱背包行李箱），結合福祿壽囍之吉祥文字意寓著民眾出入平安與發財，整體以傳統之桃符（春貼）造型為元素，融入現代語彙，呈現出強烈地域性色彩與新視覺效果。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195105367.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0a7cc56d-c46f-4d5a-9bab-6de4e5fc1589",
    "PublicArt_Name": "鐵衛獬豸雲水心",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "獬豸石柱：110 × 110 × 480cm、雲水心（共3件）B1：240 × 240 × 120cm、B2：240 × 180 × 90cm、B3：240 × 180 × 45cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "作品：花崗岩（黑、白）",
    "PublicArt_Place": "高雄市鳥松區中正路恆山南巷1號",
    "PublicArt_Funds": "60萬",
    "PublicArt_Unit": "憲兵204指揮部",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "張勇剛、邱瑞明、呂東興、蘇成基、汪碧芬、曾英棟、劉光盛",
    "PublicArt_SelectTeam": "許自貴、張永剛、王振安、盧明德、汪碧芬、潘元石、劉光盛",
    "PublicArt_Desc": "1.「獬豸」是神獸造型。雄武、威猛、強力，而且超現實，藝術轉化的想像空間仍然很大。2.「獬豸」作為本案的原型念，「神獸的概念，寓意法律的普遍性根源」；頭上之獨角，象徵執法的武器和行動力；以神獸執法，代表不執於甲方或乙方，是中正、客觀，無預設立場的執法者。就以上兩點，本案強調作品造型中的神獸意象、威武氣勢、以及執法武器和行動力。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195149457.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "fd77190f-9f68-4eb5-a958-7023ab3970d8",
    "PublicArt_Name": "紅豆寄情",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "作品：1000 × 50 × 250cm，基座：1200 × 150 × 60cm",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鐵件、外表環氧樹脂烤漆，水泥基座",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "49萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "以「紅豆的故鄉」主題概念，延伸紅豆相思寄情的驛站意象，散發豐盛、富饒、懷鄉的浪漫象徵。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621171350107.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "93243bdd-3bb4-4ef6-820c-71cd103f1390",
    "PublicArt_Name": "意念",
    "PublicArt_Author": "雷恩",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "青銅刀600cm、馬賽克500 × 600cm、水泥半球體60 ～ 120cm",
    "PublicArt_Type": "石材 - 水泥",
    "PublicArt_Material": "複合媒材：鋼板塑形、晶土色片拼貼、水泥、鋼筋",
    "PublicArt_Place": "高雄市前鎮區翠亨北路390號",
    "PublicArt_Funds": "112.5萬",
    "PublicArt_Unit": "高雄市政府原住民事務委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "俄鄧‧殷艾、雷賜、蘇信義、江冠勳、陳偉、林子森、陳幸雄",
    "PublicArt_SelectTeam": "俄鄧‧殷艾、林子森、蘇信義、陳偉、張蕙蘭、江冠勳",
    "PublicArt_Desc": "本件作品意圖表現台灣原住民排灣族傳統的宇宙觀與時空觀。代表宇宙神靈授與人（部落頭目）生存權力的青銅刀由天而降，承接刀間的水泥半球體（表面施以族群生活內容的事件圖案），又與泥土（陶壺，祖靈的居處）的概念同義。此一天與地並接的空間，是人類生存立命的基點。代表人間各種象徵與儀式性言辭的琉璃珠，在作品中畫成蔓延空間得繽紛色彩（彩色晶土琉璃拼貼）。人屬空間中具象的老少傳承，言說的則又是天、地、人之間生成與延續的神祕關係。 本件作品以縱橫交織的圖騰與象徵物；以一個迷你劇場的空間造像，藉由排灣族的傳統信仰與美學元素，展示了新的表現手法藝術論述。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621173332823.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0a4e33bc-674a-4033-bb12-7220c2962342",
    "PublicArt_Name": "舵",
    "PublicArt_Author": "陳枝明（宇田工作室）",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "200 × 120 × 220cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼",
    "PublicArt_Place": "高雄市旗津區中洲3路623號",
    "PublicArt_Funds": "64.9萬",
    "PublicArt_Unit": "高雄市旗津國小",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "熊治剛、王漢瑞、林右正、蘇信義、林大維",
    "PublicArt_SelectTeam": "熊治剛、林右正、蘇信義、林大維、陳光華",
    "PublicArt_Desc": "旗津原本是個三面臨水的狹長沙洲半島，第二港口闢建以後，旗津變成四面環海的小島。自古以來，海—對島上居民的營生、求學、交通、作息，影響十分深遠；今日，海—仍然和生活在島上的人們息息相關。多數人民的行業以討海行船為主，「舵」引領旗津人民及學子航向光明、充滿希望的未來。 「志不立，如無舵之洲，無銜之馬─王守仁」，如果沒有立定志向，就好像沒有舵的小船，容易隨波逐流；也好像沒有馬銜的馬，不知道該往何處去。本品以舵為設計主軸，設定人生方向，在學海中努力不懈，充實自己，並不斷向上攀升，補充並引領旗津人民及學子航向光明、充滿希望的未來。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120719134819642.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "be205e28-e094-43c7-b493-726f2b2fa5fe",
    "PublicArt_Name": "鏡像寰宇",
    "PublicArt_Author": "梁任宏",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "400 × 400 × 500cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼、石材",
    "PublicArt_Place": "高雄市左營區軍校路368號",
    "PublicArt_Funds": "254.425",
    "PublicArt_Unit": "國防部高等軍事法院高雄分院檢察署",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "陳雪妮、許一男、李億勳、王正源、黃堯堂",
    "PublicArt_SelectTeam": "陳明輝、姚村雄、楊文霓、王正源、黃堯堂",
    "PublicArt_Desc": "軍事法院暨檢察署是執法機關，環境氛圍難免嚴肅，期望透過作品《鏡像寰宇》的設置，彰顯執法機關公眾服務的親民性，拉近機關與公眾的距離，發揮其公共性特質，並以藝術手法結合自然環境與空間特質，提供一個使人身、心、靈輕鬆自在的公共空間。 以晉代葛洪《西京雜記》「明鏡」為喻。 「明鏡」隱喻執法者的明察秋毫，同時也象徵所有當事人捫心自問的情操。如果當事二方能彼此自我 「明其真如心，見其佛性」那麼律法即可束之高閣了。 「鏡像寰宇」以一個放大的桌鏡為藍本，讓一組互相對稱的金屬環以天體運動的模式運行，象徵宇宙天體運行的自然法則。道德經云：「人法地，地法天，天法道，道法自然」宇宙萬物生成，本存在其定理，如地球繞太陽而生四季；月亮繞地球固有潮汐，人亦循天地化育萬物法則而生。此非個人意識，無喜怒哀樂，差異對待，更無是非爭端，理所當然。亦是因果關係；因轉成果，或果轉成因。 「鏡像寰宇」期望觀者透過作品的審視進而體認擠身與公共性之價值。神秀曰：身是菩提樹，心如明鏡臺，時時勤拂拭，勿使惹塵埃。已經為我們開啟了一個自省的心離機制。「鏡像寰宇」更期待達到慧能大師所言：「菩提本無樹，明鏡亦非臺，本來無一物，何處惹塵埃」的境界，故「鏡像寰宇」有鏡臺之型，無明鏡之實，讓觀者在錯覺與反差間，了悟虛實之象，透空一切、無往無著。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195249718.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "634d0599-5615-4c9e-b324-74507ed0fac5",
    "PublicArt_Name": "聆聽雲光(一)",
    "PublicArt_Author": "顏名宏",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1428 × 540 × 119cm",
    "PublicArt_Type": "其他 - 壓克力",
    "PublicArt_Material": "三菱鏡壓克力、金屬固定架、絹印",
    "PublicArt_Place": "高雄市橋頭區經武路20號",
    "PublicArt_Funds": "900(P318-P321，4件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "從青埔站上空180角度的俯視角度觀看住民群與環境分佈，欲從中找回區域中最初的特質原貌，勾勒超現實的想像，重現儲存情感與記憶，透過璀璨陽光的交替，折射出可讓人閱讀當下的美麗幻景—時間刻度，如同音樂般跳動的音符律動映照於週邊環境，共譜和諧的篇章。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150224285.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150223406.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "83924329-f78c-45cf-9819-5615e7da6503",
    "PublicArt_Name": "初次相逢",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "120 × 120cm（共3件）",
    "PublicArt_Type": "其他 - 光柵板",
    "PublicArt_Material": "光柵板",
    "PublicArt_Place": "高雄市大寮區萬丹路129-1號",
    "PublicArt_Funds": "18.2萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "藉由光柵變圖之幻影效果，兩隻小鹿於充滿南國風情的雞蛋花綻放空間中，戲劇般相遇又別離，溫馨親切地傳達車站乘載人文交錯、時空記憶的鄉情。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195623542.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3438431a-f9a6-460f-8a6a-583aa47f4bf7",
    "PublicArt_Name": "無限奔馳",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1920 × 750cm，面積144m2",
    "PublicArt_Type": "",
    "PublicArt_Material": "金屬烤漆,雷射切割人物造型烤漆",
    "PublicArt_Place": "高雄市苓雅區中正1路99號地下1層",
    "PublicArt_Funds": "400萬元",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "郭挹芬、黃文勇、陳水財、陳坤崙、顏杏砡、劉克強",
    "PublicArt_SelectTeam": "陳俊穆、曾芳玲、蘇志徹、顏杏砡、陳水財、郭挹芬、朱惠芬",
    "PublicArt_Desc": "「無限奔馳」座落於高雄市技擊館、綜合體育場、國際標準游泳池前，在地理上位處於中山高速公路銜接高雄市、高雄縣的重要交通網，是城市的出入口地標。 作品從運動選手間的相互競賽，昇華到自我極限的生命追尋為理念。 以簡練圓弧承載運動員動態身影，配合捷運站體挑高空間圓形場域，融合地景精神，將雙圓連結成『∞』的符號：形成1+1=∞的意象，寓意著運動選手間1+1＞2，互為砥礪，相持相進之競賽精神，以及超越自我、追尋真理、循環無盡的永續進步。 熱情奔騰的紅色『∞』符號，凝聚南北（中山高速公路）與東西（高雄－鳳山）雙向空間軸線，並拓展出多向度空間思維，展現高雄民眾具有永不懈怠的運動家精神，以無窮的遠見迎向高雄新願景。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170132456.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170131895.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "72cc9cca-ad37-47bf-8efc-480ad3eb46b8",
    "PublicArt_Name": "躍動高雄",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "(1) 450 × 150 × 150cm (2) 600 × 280 × 200cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、花崗岩、銅",
    "PublicArt_Place": "高雄市苓雅區中正1路99號",
    "PublicArt_Funds": "592(P263-P264，2件組)萬",
    "PublicArt_Unit": "高雄市政府體育處",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "周明鎮、吳旭峰、吳守哲、侯淑姿、許崇堯",
    "PublicArt_SelectTeam": "周明鎮、吳旭峰、盧明德、侯淑姿、陳建北、陳水財、蘇志徹",
    "PublicArt_Desc": "高雄市為南台灣主要港口，從港口、都市、腹地及人文條件不僅是臺灣第一，在東亞也是數一數二的好地方，海洋成就高雄的條件，乾淨的水域一直是高雄人努力的目標，從河川到海洋，陸地與海底生命系統息息相關。人們賴以生存的陸地，在天空與海洋之間。珊瑚為海底生態的指標性生物，造型與色彩的美感是造物者的傑作。海豚的活潑聰明充滿生命力的行動，有如運動員在競賽場中的表現。今以健康的人與動物代表追求乾淨的天空與海洋。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195820358.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "602d5da5-9b56-441b-b707-48dcd776960e",
    "PublicArt_Name": "對話",
    "PublicArt_Author": "黃裕榮 、 駱信昌 、 黃裕和",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "100 × 125 × 125cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "和平白大理石、不銹鋼",
    "PublicArt_Place": "高雄市鼓山區大順1路858號",
    "PublicArt_Funds": "390(P265-P266，2件組)萬",
    "PublicArt_Unit": "高雄市龍華國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、吳梅嵩、許一男、陳明輝、王瑞裕、郭鈴惠、黃建興",
    "PublicArt_SelectTeam": "吳梅嵩、許一男、黃建興、陳水財、陳立民、陳雪妮、賴新龍",
    "PublicArt_Desc": "以當今資訊社會的符號（MSN），以幽默表達圓融已對的對話與互動。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195913196.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "e25db6b8-c0a8-44da-8163-4c7199e1abe3",
    "PublicArt_Name": "快樂遊獅甲",
    "PublicArt_Author": "洪易",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "960 × 170cm，共2面",
    "PublicArt_Type": "金屬 - 不鏽鋼烤漆",
    "PublicArt_Material": "鋼板烤漆",
    "PublicArt_Place": "高雄市前鎮區中山二路、復興三路、民權二路一帶",
    "PublicArt_Funds": "300萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "「北有萬年季，南有戲獅甲」，高雄市獅甲藝術節已是國內外知名的民俗活動，舉辦期間邀請許多國際舞獅團體一較高下，於是此創作作品以舞獅為主題，快樂的舞獅帶著大家趴趴走，帶著高雄人的喜悅，也帶出獅甲文化特有的熱鬧氛圍。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163201321.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3959ed52-e77d-469a-bb8c-4cb031d89166",
    "PublicArt_Name": "綠意",
    "PublicArt_Author": "廖瑞章",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1080 × 170cm",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶土、化妝土、釉",
    "PublicArt_Place": "高雄市三民區博愛一路220號地下一層",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "作品說明：「綠意」之靈感來自於自然界的有機植物，以四季中之「春天」為意象，形塑百花齊放萬象更新，充滿綠意盎然的景象。作者之所以對有機的形體有興趣，是因為有機的形狀例如種子、珊瑚與蛹等物體，代表了生命的初始與延續，希望藉由這些熟悉的物體，可以喚醒人們之間共通的記憶。藉由有機抽象的造形，形塑人為與自然交錯、和諧的意象，表現出具有生命氣息之藝術形態。作品以自然植物界的綠葉、花朵與種子為發想動機，將這些形體轉化為有機抽象的造形，並相互交錯裝置，營造出百花綻放的動人景緻。本作品除了以抽象重複的造形裝置牆面外，並以鮮豔的色彩，營造出活潑的氛圍，讓空間變得柔和有生趣。在繁忙與擁擠的都會中，注入自然的生機，因此作者以「綠意」為主題，利用作品點綴出後驛站新的生命力與活力。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195953458.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "1c005d23-7895-4259-8555-4cbf45b15e87",
    "PublicArt_Name": "珍愛一生（1）",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "510 × 472 × 15cm (單位:公分)",
    "PublicArt_Type": "其他 - 光柵板",
    "PublicArt_Material": "光柵板、強化玻璃、不鏽鋼方管、T5燈管、排風機",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "81萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "以《萌》蛋形雕刻上之圖案為元素，利用劇場似的場域裝置結合變圖的光柵幻影，疊映出青瓷工藝品般的雅致美感，敘述著一段幸福感之符號意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704200046852.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "bc8bed35-4377-491b-b3d4-4cd4255aed2d",
    "PublicArt_Name": "海洋之心",
    "PublicArt_Author": "賴純純",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "960 × 170cm，共2面",
    "PublicArt_Type": "其他 - 壓克力",
    "PublicArt_Material": "彩繪壓克力",
    "PublicArt_Place": "高雄市前鎮區中山2路268號地下1層",
    "PublicArt_Funds": "700(P302-P303，2件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "「海洋之心」豐富多彩自由的流動色光，映在「捷運之眼」中，深情閃亮的瞳孔裡我們看到高雄深邃的感情；海洋、粼粼波光、天空、藍色、航行、汗水與笑聲，海底的美人魚也愛來充滿活力時尚的三多站，共同書寫我們的共同記憶，美人魚自由逍遙的美姿告訴我們，世界海域需要我們更多的愛心與關懷。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163123197.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163124081.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "981387e5-401e-4a3d-83ba-4cf0f4a16b19",
    "PublicArt_Name": "和平啟示—多維度視覺溝通9 X 6 X18",
    "PublicArt_Author": "亞剛‧亞科夫",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "108 × 95.53 × 1082cm",
    "PublicArt_Type": "石材 - 水泥",
    "PublicArt_Material": "氟碳烤漆、鋼筋水泥",
    "PublicArt_Place": "高雄市左營區中海路200號",
    "PublicArt_Funds": "1250萬",
    "PublicArt_Unit": "行政院體育委員會",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "楊明州、胡啓邦、翁英惠、盧明德、吳啟光、陳雪妮、黃敏禎、林立平、趙建銘、劉培森、郭中端",
    "PublicArt_SelectTeam": "劉培森、郭中端、楊文霓、倪再沁、陳建北、蘇志徹、曲德義",
    "PublicArt_Desc": "民眾可以環繞並進入這組大型多維度藝術環境的作品中，每一步之間，就會出現令人驚喜的全新視覺感受。無人能看盡一切，而且所見不同，藝術家從而邀請民眾來參與藝術創作。這件作品呈現新的美學觀念，表達時間的變化。 藝術家以此為運動場館和賽事創造一個深具意義的象徵。參與運動盛會最主要即在最早體驗不可預期的觀看和挑戰時間所帶來的啟示。時間永遠無法預測，超乎可見性，代表生命的活力。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621152747382.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621152747100.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "91a9cd3c-add2-4540-afa0-539e32374c0d",
    "PublicArt_Name": "悟",
    "PublicArt_Author": "黃裕榮",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "160 × 100 × 40cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "金屬烤漆、不鏽鋼、天然大理石",
    "PublicArt_Place": "高雄市鳳山區文衡路51號　國立鳳山高級商工職業學校",
    "PublicArt_Funds": "48萬",
    "PublicArt_Unit": "國立鳳山高級商工職業學校",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "蕭金榮（校長）、蕭文森（使用單位代表）、陳慶榮（校友會會長）、李宗杰（興建工程建築師）、盧明德（藝術創作委員）、 賴新龍（藝術行政委員）、郭瑞坤（藝術教育委員）",
    "PublicArt_SelectTeam": "賴新龍（藝術行政委員）、郭瑞坤（藝術教育委員）、蘇志徹（應用藝術委員）黃文勇（藝術評論委員）、陳水財（藝術教育委員）",
    "PublicArt_Desc": "手腦並用，手眼協調。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195446029.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "23f422bd-bf24-4cbb-8322-5d1ac4c70e82",
    "PublicArt_Name": "蒼穹光舞",
    "PublicArt_Author": "黃文勇 、 乘光白",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "590 × 150 × 227cm",
    "PublicArt_Type": "玻璃 - 琉璃",
    "PublicArt_Material": "純銅、彩色琉璃、省電燈泡",
    "PublicArt_Place": "高雄市鳳山區光遠路446號地下一層",
    "PublicArt_Funds": "720(P323-P325，3件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "《蒼穹光舞》主旨為緬懷先民篳路藍縷，以溫暖的光點、華麗的色彩、明晰的圖像，呈現鳳山先民在土地上艱苦開拓的抒情史詩。以中央的「宇宙之愛」帶領，昂揚的生命樹如龍昇騰，蘊發永恆的奮進精神；由「天空」的花朵向兩側發展出「海洋」、「太陽」、「月亮」、「大地」四種力量中心，具有源頭意味的同心圓曼陀羅圖騰，支撐先民漁、獵、牧、耕，勞動型態的生活場景：群魚在海中嬉戲，動物在山麓河畔棲息，飛鳥與鹿在草原畜養，人們在田畝中耕作，並以海螺、獵人、山羊、稻穗為代表深植於人類集體意識的勞動意象。思想的光點構成記憶的符碼，情感的色彩塑造生命的氛圍，在崇高瑰麗的蒼穹下，千錘萬鑿的光舞，細說著先民篳路藍縷的精神與拓荒的故事。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170427388.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "c0723f74-d37e-4b4f-9b09-5d34a447d757",
    "PublicArt_Name": "藝猶未盡－悠遊",
    "PublicArt_Author": "洪易",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "1.45 × 280 × 112cm 2.36 × 300 × 90cm 3.50 × 120 × 80cm 4.150 × 50 × 180cm 基座：50 × 50 × 120cm",
    "PublicArt_Type": "石材 - 水泥",
    "PublicArt_Material": "作品：鋼板烤漆 基座：水泥石材",
    "PublicArt_Place": "高雄市前鎮區中山2路268號地下1層",
    "PublicArt_Funds": "700(P302-P303，2件組)萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、方惠光、王明蘅、陳建北、陳坤崙、劉克強、熊鵬翥",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、方惠光、翁英惠、倪再沁、黃承令",
    "PublicArt_Desc": "高雄捷運最南端－小港站，源於港口與陸地的串聯，其價值與意義表現出高雄以海洋起家的人文歷史。由此可知，海洋對高雄來說是最密不可分的珍貴資產，所以本創作以海洋生命體之一的「魚」作為創作主題。此作品的魚兒們因為高雄捷運的開通，可以從海洋游到三多站和人們一起逛街、血拼。作品表現出時空交錯、物換星移的特殊景象，而有趣、幽默的創作手法，也帶給人們對海洋新的詮釋與認同。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163342289.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163341971.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163343437.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163342555.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "bfaa6c3e-00af-4dff-b609-5eb69806e6e1",
    "PublicArt_Name": "看見三尺法",
    "PublicArt_Author": "黃裕榮",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "65 × 80 × 2400cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼、鍍鋅管",
    "PublicArt_Place": "高雄市鳳山區南光街239號",
    "PublicArt_Funds": "215萬",
    "PublicArt_Unit": "審計部高雄市審計處",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "黃郁生、張清淵、楊明迭、楊瑞禎、陳和",
    "PublicArt_SelectTeam": "梁百煜、洪慶宗、陳明輝、黃郁生、姚村雄、張清淵",
    "PublicArt_Desc": "創造以公平、公正、獨立、超然之審計精神為藝術設置目標，符合超然獨立、公正、客觀、服務的審計理念為訴求。 以高雄的鐵雕文化創作一把代表嚴謹、理性、純白廉潔的尺規，於上賦予代表法律的「三尺法」語意及訊息，座落於整棟建築的轉角處，相當具有標竿、準則、力量、公平、公正等內涵，點出本部不被外在環境因素所影響，仍然屹立不搖的超然立場；三尺法意函法律。古代把法律條文寫在三尺長的竹簡上，故稱法律為三尺法。史記，卷一二二，酷吏傳，杜周傳：君為天子決平，不循三尺法，專以人主意指為獄，獄者固如是呼？明史，卷一九三，翟鑾傳：按律，籍沒止三條，謀反、叛逆及奸黨耳。不合三尺法，何以信天下？",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704195343431.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8cdee94b-89f1-46ed-91ed-6566d1614f26",
    "PublicArt_Name": "翠啼春曉",
    "PublicArt_Author": "盧明德 、 郭挹芬",
    "PublicArt_Year": "2009",
    "PublicArt_Size": "168 × 354cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "原色不銹鋼板5.0mm加工型彩繪",
    "PublicArt_Place": "高雄市鳳山區光遠路226號地下一層",
    "PublicArt_Funds": "13.63萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "劉克強、白雅玲、張淵舜、蔡獻友、郭瑞坤、盧友義、吳旭峰",
    "PublicArt_SelectTeam": "陳俊穆、郭瑞坤、盧友義、吳守哲、周雅菁、王哲雄、李俊賢",
    "PublicArt_Desc": "《翠啼春曉》源自於強調鳥語花香、如詩如畫的地域性人文特色，進而以流暢婉約的花卉線條，構築層次濃郁的秘密花園。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170851353.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621170851577.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "021259e2-03e5-4c00-8345-61257ffaa0de",
    "PublicArt_Name": "愛一直閃亮",
    "PublicArt_Author": "謝明憲",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長400cm、寬270cm",
    "PublicArt_Type": "陶瓷 - 陶板",
    "PublicArt_Material": "陶",
    "PublicArt_Place": "高雄市大寮區八德路300號",
    "PublicArt_Funds": "14.36萬",
    "PublicArt_Unit": "高雄市政府消防局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁勝豐、吳守哲、蘇志徹、王慶鐘、陳文龍、林彥忠、郭明忠、何鴻義",
    "PublicArt_SelectTeam": "翁勝豐、吳守哲、陳水財、蘇志徹、施仁龍",
    "PublicArt_Desc": "本作品不僅朝向構思與呼應表現主體所具有「搶救、預防、求護」之特性，發揮「大愛」精神的藝術創作，它更針對“中庄消防分隊”之基地條件及實際工程執行的需要進行規劃，以期使作品與環境結合，更親近於使用者，完成一件美好的公共藝術案。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704210955814.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7542ee9e-a500-4173-acdc-6a29ea805ddc",
    "PublicArt_Name": "捉迷藏、乘風破浪",
    "PublicArt_Author": "采青窯業有限公司",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長900cm、寬600cm、高300cm",
    "PublicArt_Type": "陶瓷 - 陶板",
    "PublicArt_Material": "以鋼筋及混泥土做地基與造型的基本結構，外部再以陶板鑲嵌於作品的表面",
    "PublicArt_Place": "高雄市左營區文府路399號",
    "PublicArt_Funds": "102萬",
    "PublicArt_Unit": "高雄市文府國小",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "黃銘松、胡耿毓、林義雄、陳聖頌、邱秋德、張惠蘭、王漢瑞",
    "PublicArt_SelectTeam": "邱秋德、李億勳、林勝雄、王永志、黃銘松",
    "PublicArt_Desc": "捉迷藏hide and seek： 以山的意象作為作品設計，運用學校旁的半屏山作為作品發想而在作品上的使用空間穿透的表現方式呈現山的意境，間接與學校周圍的環境做對話呼應，而作品也可以讓學童在內部遊戲玩耍與學童產生互動，而山在此是隱喻學童們能像山一樣的成長、茁壯、老實、可靠。 乘風破浪brave the wind and waves ： 以海的意象做為作品設計而作品的長度尺寸是意涵海能納百川接收不同的資訊及接納不同環境及不同的人事，也是意涵學童們能在求學路途上能突破種種的考驗，習得到更多的歷練，希望學童們未來也能有像海一樣的視野與度量，而作品也是讓學童在玩樂之餘能有休憩的場域。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211309677.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9e311bbd-840b-4e4f-a15e-5a9579fee090",
    "PublicArt_Name": "漾",
    "PublicArt_Author": "緒方良信 、 甘朝陽",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長 300 cm、寬380cm、高450cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "大理石、LED燈",
    "PublicArt_Place": "高雄市楠梓區卓越路2號",
    "PublicArt_Funds": "169.05萬",
    "PublicArt_Unit": "國立高雄第一科技大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "李慶章、林麗珠、許宏德、蘇信義、翁英惠、吳守哲、高世銘",
    "PublicArt_SelectTeam": "曾國鴻、歐淑慧、張新丕、陳建北、王為河、蘇信義、李億勳",
    "PublicArt_Desc": "以水紋的造型作為整體作品的主軸創意，每一顆親臨水紋的心靈都被撫慰。生命種種的悸動都在水紋中迴盪。水，是生命的泉源；水，是廉潔、慈悲與智慧；水，是每一個學子的學習源頭，漾，是生命經驗的意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150653331.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150652935.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150653114.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "11a3b1bc-7535-431f-8110-5c7cef4acae6",
    "PublicArt_Name": "凌波仙子",
    "PublicArt_Author": "楊慧如 、 林維俞",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長 350 cm、寬 450 cm 長 700 cm、寬 250 cm",
    "PublicArt_Type": "陶瓷 - 瓷磚",
    "PublicArt_Material": "瓷磚、玻璃纖維",
    "PublicArt_Place": "高雄市左營區曾子路281號",
    "PublicArt_Funds": "300(P199-P201，3件組)萬",
    "PublicArt_Unit": "高雄市立左營國民中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王金龍、許一男、陳水財、李億勳、李慧蓉、張益得",
    "PublicArt_SelectTeam": "陳明輝、陳水財、許一男、張新丕、曾媚珍",
    "PublicArt_Desc": "左營區內擁有柴山與壽山兩大綠地，與洲仔溼地、原生植物園四者連成綠色帶狀生態區，而今日之左營可謂是高雄生態與綠色環境教育之重要示範區。作品以左營地區之生態環境，半屏山、蓮池潭與水雉為主題構成。 水雉是台灣留鳥，為保育鳥類，俗稱「凌波仙子」，因其優雅體態與動作曼妙，彷彿仙子臨水而得名。又稱菱角鳥，因其主要棲息於菱角池。象徵左營地區自然生態環境與教育，具主要指標意義。 左營凹仔底為高雄最大的溼地生態空間，由於城市的開發，溼地生態遭受嚴重壞，昔日遍佈的菱角田與蓮池潭蓮花盛開景象今日幾不可見，洲仔溼地近來重建棲地，復育成功，讓原有之生態能夠復原，隨著菱角田與溼地復生，水雉已於2004年重返左營洲仔溼地，振奮了綠色團體的士氣，亦為成功復育溼地的指標。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211046236.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "f921eead-b8c1-431d-aae8-4605bc76abc7",
    "PublicArt_Name": "思源",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "80 × 367.5 及 80 × 439 公分 各2座",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "馬賽克鑲嵌",
    "PublicArt_Place": "高雄市左營區自由三路478號",
    "PublicArt_Funds": "58(P202-P204，3件組)萬",
    "PublicArt_Unit": "高雄市新民國小",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "林清玉、陳雪妮、陳立民、蘇連陳、王漢瑞",
    "PublicArt_SelectTeam": "林清玉 、郭慧雅、蘇志徹 、邱秋德、張清淵、高聖賢、吳寛瀛",
    "PublicArt_Desc": "本處作品坐落於新建大樓的穿堂上，四根圓柱以馬賽克鑲嵌表現主體分別為；蓮池潭、半屏山與高鐵左營站、左營原生植物園、以及周仔濕地、充分展現左營豐富的歷史人文與自然生態的風情。透過圖像結合於學生日常生活環境之中，使學生對於左營在地人文、生態能做更深入的瞭解及認同，並充分展現出繼往開來的精神。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704210654394.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8d488ef3-3f02-4f34-b98d-7538c5c5781f",
    "PublicArt_Name": "躍昇中的左營",
    "PublicArt_Author": "林維俞",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長430cm、寬430cm、高910cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "作品: 不銹鋼",
    "PublicArt_Place": "高雄市左營區曾子路281號",
    "PublicArt_Funds": "300(P199-P201，3件組)萬",
    "PublicArt_Unit": "高雄市立左營國民中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王金龍、許一男、陳水財、李億勳、李慧蓉、張益得",
    "PublicArt_SelectTeam": "陳明輝、陳水財、許一男、張新丕、曾媚珍",
    "PublicArt_Desc": "鳳山舊城與蓮池潭龍虎塔為左營之獨特地標，以城牆與城樓之意象，運用面體交叉構成主體，寓意現代與傳統之融合，形成四面城牆與城樓之概念，周圍環繞四列高鐵與捷運列車造型之座椅，與主體相呼應，由四方運行，以致四通八達與飛躍速度，延展其場域空間，象徵著左營區域未來之發展與關鍵。 利用相互為借的穿透手法，以及「虛」、「實」相生的並存為用，在中心內部以龍虎塔之造型剪影鏤空交錯而成，透過虛空間之運用組合而成，在視覺上可形成雙塔之意象。 並將左營北門之門神與龍虎塔之龍虎擷取其元素造型，重新以鑲嵌手法塑造於作品之上，加深民眾對左營傳統意象之解讀與體認，民眾與師生藉環繞主體一週，將由四個不同視點角度皆可出現左營舊城與龍虎雙塔傳統與創新之印象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211139778.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "db83b870-d25f-4c78-9f55-7cd014bef396",
    "PublicArt_Name": "360°",
    "PublicArt_Author": "丁水泉 、 陳奕彰",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長 800cm、寬900 cm、高550cm (單位:公分)",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鐵、不銹鋼、LED燈、玻璃",
    "PublicArt_Place": "高雄市楠梓區卓越路2號",
    "PublicArt_Funds": "146.95萬",
    "PublicArt_Unit": "國立高雄第一科技大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "李慶章、林麗珠、許宏德、蘇信義、翁英惠、吳守哲、高世銘",
    "PublicArt_SelectTeam": "曾國鴻、歐淑慧、張新丕、陳建北、王為河、蘇信義、李億勳",
    "PublicArt_Desc": "「360° 」象徵圓滿、和諧、團結；富有動感的轉輪，象徵學習生生不息、向前發展、走向世界的前景。圓弧當中的每一個刻度，代表著不同的面向和角度。 圓規代表著道路和軌跡；有著嚴謹、專業、標準的意涵。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621144544247.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621144543254.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621144545017.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0e638917-cc59-43d2-a383-20bdc2a0449d",
    "PublicArt_Name": "岸岩",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "個別組件1：300×300×30cm 個別組件2：180×180×30cm 個別組件3：120×120×30cm 組合面積：約550×300×30cm (單位:公分)",
    "PublicArt_Type": "",
    "PublicArt_Material": "熱浸鍍鋅環氧烤漆鋼構、塑鋁板、數位LED顏色/依燈光變化",
    "PublicArt_Place": "高雄市鹽埕區莒光街2-1號",
    "PublicArt_Funds": "190(P184-P187，4件組)萬",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "許一男、吳梅嵩、劉富美、劉秀梅",
    "PublicArt_SelectTeam": "歐秀卿、陳水財、吳梅嵩、蘇志徹、洪根深",
    "PublicArt_Desc": "以烤漆鋼構方式做成臨海之小山丘、小岬角。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163045374.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "ff8a2fa0-3614-4ae5-a93f-15d600f0c9be",
    "PublicArt_Name": "智慧的蔓延",
    "PublicArt_Author": "黃裕榮 、 駱信昌 、 黃裕和",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "130Hx95Wx55D cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "白大理石、玻璃",
    "PublicArt_Place": "高雄市楠梓區楠梓路262號",
    "PublicArt_Funds": "48.1萬",
    "PublicArt_Unit": "高雄市楠梓國小",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "吳梅嵩、許一男、方惠光、陳水財、陳英明、黃振祥",
    "PublicArt_SelectTeam": "陳英明、洪明宏、許自貴、蘇志徹、賴新龍",
    "PublicArt_Desc": "播種智慧的種子 讓她靜靜的 靜靜的蔓延於校園裡",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150556989.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "91bfe665-b67d-4966-b5b4-1667da89e31a",
    "PublicArt_Name": "岡山映象",
    "PublicArt_Author": "柯燕美",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長 360 cm、高 240 cm",
    "PublicArt_Type": "陶瓷 - 陶板",
    "PublicArt_Material": "陶",
    "PublicArt_Place": "高雄市岡山區民有路68號",
    "PublicArt_Funds": "215(P205-P206，2件組)萬",
    "PublicArt_Unit": "中華郵政股份有限公司鳳山郵局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林清勇、洪明宏、陳水財、郭小菁、林麗華、林彰武、許智遠、洪淑慧、李永龍",
    "PublicArt_SelectTeam": "曾俊彥、楊文霓、張栢烟、吳旭峰、蘇志徹、林彰武、許智遠、洪淑慧、李永龍",
    "PublicArt_Desc": "陶板作品本身就隱含土地的況味；內容上，亦取材岡山在地映象─城市景觀、水庫景點、文化建設、自然花草、民眾生活等。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704210209806.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "625a9599-512a-487b-9165-0cd914d2fca6",
    "PublicArt_Name": "步步高升",
    "PublicArt_Author": "洪孟佳",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長600cm、寬180cm、高200cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、烤漆",
    "PublicArt_Place": "高雄市楠梓區加昌路910號",
    "PublicArt_Funds": "53.5萬",
    "PublicArt_Unit": "高雄市右昌國小",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "李輝雄、王漢瑞、黃壬來、藍奉忠、吳怡葵",
    "PublicArt_SelectTeam": "李輝雄、王國柱、陳昱銘、莊正德、林雯芬",
    "PublicArt_Desc": "主體色彩艷麗，流水源源不絕，舞動學童青春活力； 荷葉造型蘊含禪意，象徵師生追求卓越，步步高升。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704210129152.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "260201b1-517b-40e9-a594-26bada44dedb",
    "PublicArt_Name": "展翅高飛",
    "PublicArt_Author": "設計者: 李億勳 、 創作者: 紅毛港馬賽克鑲嵌工作室",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長1200cm、寬350cm",
    "PublicArt_Type": "陶瓷 - 瓷磚",
    "PublicArt_Material": "磁磚、鐵",
    "PublicArt_Place": "高雄市小港區明義街77號",
    "PublicArt_Funds": "70(P195-P196，2件組)萬",
    "PublicArt_Unit": "高雄市明義國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "林貴芬、洪明宏、曾媚珍、陳明輝、王漢瑞",
    "PublicArt_SelectTeam": "蘇信義、陳明輝、曾媚珍、顧超光、李憶勳",
    "PublicArt_Desc": "「台灣藍鵲」有朱紅的嘴巴，碧藍的身軀，飛翔時，開展翅膀，形成優美的扇型；長長的尾羽，宛如新娘子拖曳的裙襬，十分優雅，所以又名：「長尾山娘」；成群的藍鵲飛過林間，令人驚艷；藍鵲也很聰明，會合作照顧幼鳥，哺育下一代。藍鵲甚得國人的喜愛，獲選為台灣國鳥。 本校鄰近小港機場，常見飛機劃空而過；故以飛行為主題，期許學生懷抱希望，壯志凌雲；以國鳥「藍鵲」為主角，期待學生珍愛鄉土，呵護保育動物。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704210332153.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8932d4d7-f6b3-4abc-9b92-2dfa407349b8",
    "PublicArt_Name": "凝聚",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "60 × 133 ×130 公分 2座",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "鋼條、水泥塑形、馬賽克鑲嵌",
    "PublicArt_Place": "高雄市左營區自由三路478號",
    "PublicArt_Funds": "58(P202-P204，3件組)萬",
    "PublicArt_Unit": "高雄市新民國小",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "林清玉、陳雪妮、陳立民、蘇連陳、王漢瑞",
    "PublicArt_SelectTeam": "林清玉 、郭慧雅、蘇志徹 、邱秋德、張清淵、高聖賢、吳寛瀛",
    "PublicArt_Desc": "作品「凝聚」座落於足球場西北方，以立體雕塑和馬賽克鑲嵌呈現足球運動員的團隊精神，以大家熟悉的球員肩並肩、屈膝半蹲的動作，呈現團隊力量的象徵轉化為休憩座椅，企圖將足球的互動精神傳達給學生。臉部的挖空處，增加了作品與學生之間的互動與趣味性，讓每位學生都可以化身為令人仰慕的足球好手。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704210247626.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "e54a2979-6416-4278-87b4-2a7850576f5e",
    "PublicArt_Name": "智慧的傳承",
    "PublicArt_Author": "黃裕榮 、 駱信昌 、 黃裕和",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "1280H、180W、330D CM",
    "PublicArt_Type": "",
    "PublicArt_Material": "金屬骨架動力裝置、金屬蒙皮",
    "PublicArt_Place": "高雄市楠梓區楠梓路262號",
    "PublicArt_Funds": "82萬",
    "PublicArt_Unit": "高雄市楠梓國小",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "吳梅嵩、許一男、方惠光、陳水財、陳英明、黃振祥",
    "PublicArt_SelectTeam": "陳英明、洪明宏、許自貴、蘇志徹、賴新龍",
    "PublicArt_Desc": "以松鼠的線條勾勒出學校豐富的自然生態特色，加以楠梓國小的民俗技藝文化--『扯鈴』的運轉為人文內涵，轉畫為生生不息的智慧傳承意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150527184.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150528250.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150528165.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "af68eb90-612c-44bf-af2b-4263fbbfdcdc",
    "PublicArt_Name": "闢土",
    "PublicArt_Author": "陳翰平(富景顧問有限公司)",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長800cm、寬250cm、高250cm",
    "PublicArt_Type": "玻璃 - 強化玻璃",
    "PublicArt_Material": "天然石材、玻璃、不銹鋼",
    "PublicArt_Place": "高雄市燕巢區安招村成功路一號",
    "PublicArt_Funds": "426.6(P209-P216，8件組)萬",
    "PublicArt_Unit": "行政院國軍退除役官兵輔導委員會岡山榮譽之家",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王宗海、張惠蘭、蘇志徹、吳瑪俐、陳水財、許英毅",
    "PublicArt_SelectTeam": "翁勝豐、張惠蘭、陳水財、吳旭峰、郭挹芬、侯淑姿、吳玉成",
    "PublicArt_Desc": "作品以整塊石材原石雕鑿製作。表面刻意保留石材的天然紋理，並於每片石材上雕鑿出榮民的足跡，紀錄榮民篳路藍縷、植被山林，建設台灣的精神，營造欣欣向榮的美景。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704210441040.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "ce8b642c-6380-4f04-89ee-3f54b43cfbf9",
    "PublicArt_Name": "話當年",
    "PublicArt_Author": "陳翰平(富景顧問有限公司)",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長270cm、寬180cm",
    "PublicArt_Type": "其他 - 木材",
    "PublicArt_Material": "木材",
    "PublicArt_Place": "高雄市燕巢區安招村成功路一號",
    "PublicArt_Funds": "426.6(P209-P216，8件組)萬",
    "PublicArt_Unit": "行政院國軍退除役官兵輔導委員會岡山榮譽之家",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王宗海、張惠蘭、蘇志徹、吳瑪俐、陳水財、許英毅、",
    "PublicArt_SelectTeam": "翁勝豐、張惠蘭、陳水財、吳旭峰、郭挹芬、侯淑姿、吳玉成",
    "PublicArt_Desc": "透過照片的訴說，展現出榮民的功績，創造出美麗的寶島，人間的天堂。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704210549048.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5a1f46a5-9206-4d40-8da3-9459d36f5483",
    "PublicArt_Name": "無限可能",
    "PublicArt_Author": "張錦郎",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長200cm、寬200cm、高200cm、面積10.8×9.2m2 (單位:公分)",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "銅、陶",
    "PublicArt_Place": "高雄市苓雅區三多二路100號",
    "PublicArt_Funds": "80萬",
    "PublicArt_Unit": "高雄市苓雅區五權國民小學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "劉立敏、林永發、盧明德、李正雄、趙素貞",
    "PublicArt_SelectTeam": "許一男、陳水財、 洪根深、 翁英惠、邱博舜、李正雄、趙素貞",
    "PublicArt_Desc": "1.藉由手部造型，形同種子般以實體呈現，透過兩手交錯形成的虛空間，營造無限可能的境界，如同一顆種子，必須在良好環境下，經細心呵護的照料，才能神奇微妙且快速成長。 2.手部的語彙形同實踐力，任何事情，不管之前規劃如何詳細， 若欠缺行動力，終究無法成事，教育更是強調學子知而行之的道理，眼到、口到、耳到、不如手到來得實際，雙手便是一個宇宙，它能成就一切無限的可能。 3.即是種子的圖像，運用氣根向四面擴張的氣勢，表示教育向下紮根，無限延伸，影響之大，可想而知。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172025725.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172026696.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172025789.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "1c5f6a5a-8256-4c5c-95ff-91aa93ad9317",
    "PublicArt_Name": "林園拾樂",
    "PublicArt_Author": "柯燕美",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長360 cm、寬 120 cm",
    "PublicArt_Type": "陶瓷 - 陶板",
    "PublicArt_Material": "陶",
    "PublicArt_Place": "高雄市林園區鳳林路1段176號",
    "PublicArt_Funds": "100(P207-P208，2件組)萬",
    "PublicArt_Unit": "中華郵政股份有限公司鳳山郵局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林清勇、洪明宏、陳水財、郭小菁、林麗華、林彰武、許智遠、洪淑慧、李永龍",
    "PublicArt_SelectTeam": "曾俊彥、楊文霓、張栢烟、吳旭峰、蘇志徹、林彰武、許智遠、洪淑慧、李永龍",
    "PublicArt_Desc": "就是喜歡陶版作品，捏土燒陶，總有一份撫土地的踏實感；內容上，則嘗試勾勒一幅林園樂圖，以愉快的色彩，純手的感性，給在地的海岸、橋樑、海口、養殖業、景點、工廠，穿上藝術的衣裳。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704204927110.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "43bffd0f-de57-4353-ac3a-9e5637c24684",
    "PublicArt_Name": "網住台灣",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長 1200 cm、寬 500 cm、高 90 cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼",
    "PublicArt_Place": "高雄市岡山區民有路68號",
    "PublicArt_Funds": "215(P205-P206，2件組)萬",
    "PublicArt_Unit": "中華郵政股份有限公司鳳山郵局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林清勇、洪明宏、陳水財、郭小菁、林麗華、林彰武、許智遠、洪淑慧、李永龍",
    "PublicArt_SelectTeam": "曾俊彥、楊文霓、張栢烟、吳旭峰、蘇志徹、林彰武、許智遠、洪淑慧、李永龍",
    "PublicArt_Desc": "作品使用極限藝術的概念，以「網絡」為基調，台灣地圖為模型，不鏽鋼管、鋼球為材，搭構於大樓壁面，將郵局如網絡密織遍在於整個台灣之關連意象，簡化成「網住台灣」。 不鏽鋼管，依台灣主要山巒曲線彎折成型，不鏽鋼管曲線上以及周遭壁面，裝有大小不同的鋼球，意義延伸為海島國家意象的波浪與水珠。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704205005692.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "d2affb0f-73c8-4e1e-a304-a6559a8e1d16",
    "PublicArt_Name": "邁向未來",
    "PublicArt_Author": "陳翰平(富景顧問有限公司)",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長780cm、寬20cm、高50cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼沖孔板",
    "PublicArt_Place": "高雄市燕巢區安招村成功路一號",
    "PublicArt_Funds": "426.6(P209-P216，8件組)萬",
    "PublicArt_Unit": "行政院國軍退除役官兵輔導委員會岡山榮譽之家",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王宗海、張惠蘭、蘇志徹、吳瑪俐、陳水財、許英毅",
    "PublicArt_SelectTeam": "翁勝豐、張惠蘭、陳水財、吳旭峰、郭挹芬、侯淑姿、吳玉成",
    "PublicArt_Desc": "老榮民已在這兒落地生根，他們愛國家、愛家園。作品型塑出彩虹奔向天際的造型，訴說著岡山榮家從過去陳舊封閉的傳統家園，邁向未來美麗的榮家生活。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704205122050.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7f8b8ca9-925d-421b-bc73-a7ab28b9f3b4",
    "PublicArt_Name": "留『憶』走廊",
    "PublicArt_Author": "黃裕榮 、 駱信昌 、 黃裕和",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "20H×1840W×254D cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "白大理石、黑花崗、抿石子",
    "PublicArt_Place": "高雄市楠梓區楠梓路262號",
    "PublicArt_Funds": "42萬",
    "PublicArt_Unit": "高雄市楠梓國小",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "吳梅嵩、許一男、方惠光、陳水財、陳英明、黃振祥",
    "PublicArt_SelectTeam": "陳英明、洪明宏、許自貴、蘇志徹、賴新龍",
    "PublicArt_Desc": "保留最真實的古蹟原貌，於地鋪面上導入底片記載事物的造型概念，刻畫出楠梓國小的一些在地情愫。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150112285.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150112581.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "f371f805-6032-45f1-9e99-badbc5567b21",
    "PublicArt_Name": "左營印象-文舞春秋",
    "PublicArt_Author": "楊慧如 、 製作:紅毛港馬賽克鑲嵌工作室",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長1500cm、寬1334cm、高190cm",
    "PublicArt_Type": "石材 - 磚",
    "PublicArt_Material": "鋼筋、混凝土、紅磚、清水磚",
    "PublicArt_Place": "高雄市左營區曾子路281號",
    "PublicArt_Funds": "300(P199-P201，3件組)萬",
    "PublicArt_Unit": "高雄市立左營國民中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王金龍、許一男、陳水財、李億勳、李慧蓉、張益得",
    "PublicArt_SelectTeam": "陳明輝、陳水財、許一男、張新丕、曾媚珍",
    "PublicArt_Desc": "左營歷來為軍事重鎮，多次經歷兵燹，今日亦為軍事要地，因此作品以棋局象徵左營之特殊地理位置，象棋為傳統之技藝，廣受民眾喜愛與研究，棋藝讓人富思考與邏輯，猶如教育培養學生之智育，其中之道理深奧廣闊。 以立體之象棋造型，將各角色具象化，並結合街道傢具之構想，配合棋局「七星聚會」之走位，師生民眾可在此休憩活動。「七星聚會」是聞名之棋局，變化使人感興趣之古棋局。深具高度藝術性與變化莫測，不同之走法，形成不同之結局，為棋藝局最具代表者。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704205407882.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "fd4ba08d-4f89-4af3-a194-ad9db6c5e674",
    "PublicArt_Name": "秘密花園",
    "PublicArt_Author": "設計者: 李億勳 、 創作者: 紅毛港馬賽克鑲嵌工作室",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長 560 cm、寬 270 cm",
    "PublicArt_Type": "陶瓷 - 瓷磚",
    "PublicArt_Material": "磁磚、鐵",
    "PublicArt_Place": "高雄市小港區明義街77號",
    "PublicArt_Funds": "70(P195-P196，2件組)萬",
    "PublicArt_Unit": "高雄市小港區明義國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "林貴芬、洪明宏、曾媚珍、陳明輝、王漢瑞",
    "PublicArt_SelectTeam": "蘇信義、陳明輝、曾媚珍、顧超光、李憶勳",
    "PublicArt_Desc": "露洗的清晨， 快樂從全世界奔來， 在這美麗的園地， 歡喜的甘泉在每一片葉裡輕快的奔流， 希望的日光在每一張花瓣上閃亮的跳耀， 有一首詩 寫在百合花的潔白， 有一支歌 停駐在蝴蝶的翅膀， 有一瓶蜜 藏在空氣奇異的芳香， 生命的低語在風中呢喃。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704205215498.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5ed32a3e-aa73-4148-9332-bf98c1dd6153",
    "PublicArt_Name": "留憶走廊",
    "PublicArt_Author": "黃裕榮",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "20*1840*254",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "黑花崗石、和平白大理石、金屬烤漆、玻璃",
    "PublicArt_Place": "高雄市楠梓區楠梓路262號 楠梓國小第二期校舍、廣場、校門入口處",
    "PublicArt_Funds": "48.1萬",
    "PublicArt_Unit": "高雄市楠梓國小",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "吳梅嵩、許一男、方惠光、陳水財、陳英明、黃振祥",
    "PublicArt_SelectTeam": "陳英明、洪明宏、許自貴、蘇志徹、賴新龍",
    "PublicArt_Desc": "將「學校」以一種綜合觀念的方式思考，以形式而言，學校是屬於社區總體營造的範疇之一，是該與鄰近社區充分結合的多元環境。而以功能與本質上而言，「學校」是文化發揚的起點，更是教育傳承與創新的溫床。此作品即秉持公共藝術的在地性、社區性與人文歷史，與學校的社區、傳承功能的特性，進行楠梓國小校園區域的規劃，此作品一共設置了三件作品，三件作品皆與「傳承」的意涵息息相關，分別是智慧的蔓延、留憶走廊、智慧的傳承，分佈於校門的入口處、第二期宿舍與綜合廣場內，雖地置不同校內不同區域，確是彼此互相呼應。\r\nAbout_黃裕榮\r\n創作者黃裕榮除了楠梓國小智慧的蔓延、留憶走廊、智慧的傳承，為人所知之外，高雄第一科大「解碼大地生機」與「對話」，也同樣知名，其擅長以現代媒材巧妙結合創作，創作靈感源自於抽象的意涵，透過具體物象的轉譯，將所欲表達的意涵延伸之後，往往流露出無限的想像空間。楠梓國小的此三件作品，便是傳達抽象的教育觀念，卻實際落實於每日的學習與智慧的開展當中。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704205452922.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "70d87cb0-259a-4144-abef-ce3c803d7d68",
    "PublicArt_Name": "遨遊於學海",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長 918 cm、高 290 cm",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "馬賽克磁磚",
    "PublicArt_Place": "高雄市左營區重信路215號",
    "PublicArt_Funds": "53萬(家長會捐贈13萬)",
    "PublicArt_Unit": "高雄市立福山國中",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "黃權松、翁英惠、 許一男、陳明輝、蔡瑞益、王怡文、趙坤正",
    "PublicArt_SelectTeam": "陳明輝、蘇志徹、許一男、蔡瑞益、范峻銘、鄭蔚汶、李彩月",
    "PublicArt_Desc": "學校是傳授知識與品德的場域，閱讀可以培養學生的氣質，增長知識的廣度與見聞。 鯉魚為活力健康的環境指標，在作品中象徵莘莘學子，悠然於校園中，雲海與書本寓意著學海浩瀚無涯的知識與校園的學習環境，作品以超現實主義手法表現，象徵學生的鯉魚或單或群遨游於知識的廣闊領域，放鬆心情，愉悅的讀書，享受求知的樂趣，與學校「博學」、「愛群」、「多能」、「創新」、「卓越」之教學理念相契合。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704205946395.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5ad8778e-9f2d-4f66-a984-ccebdc488c57",
    "PublicArt_Name": "對話",
    "PublicArt_Author": "陳翰平(富景顧問有限公司)",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "作品:長250cm、寬200cm、高40cm；基座:長250cm、寬200cm、高40cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "作品:白花大理石 、基座: 鋼筋混凝土外貼石片",
    "PublicArt_Place": "高雄市燕巢區安招村成功路一號",
    "PublicArt_Funds": "426.6(P209-P216，8件組)萬",
    "PublicArt_Unit": "行政院國軍退除役官兵輔導委員會岡山榮譽之家",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王宗海、張惠蘭、蘇志徹、吳瑪俐、陳水財、許英毅",
    "PublicArt_SelectTeam": "翁勝豐、張惠蘭、陳水財、吳旭峰、郭挹芬、侯淑姿、吳玉成",
    "PublicArt_Desc": "無礙的對話，溝通的橋樑，作品以圓形之線條構成，代表圓滿，象徵榮民、員工及社區民眾之間，情同手足、情感相融，亦代表著人生過程之蛻變與成長。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704205647123.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "dd9d7ef1-24a2-45b6-8d61-cbd500af2164",
    "PublicArt_Name": "＜樹。描＞ 扎根抽芽之能動",
    "PublicArt_Author": "劉育明",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "1. 主體作品 L:5m x W:7.2m x H:14m；基座: 長150cm、寬150cm2. 愛心造型樹 L:3.5m x W:1.5m x H:2.4m；基座: 長150cm、寬300cm3. 小花造型樹 L:1m x W:0.6m x H:2.4m；基座: 長120cm、寬120cm4. 符號造型樹 L:1.8m x W:0.8m x H:2.4m ；基座: 長150cm、寬150cm5. 翅膀 (單位:公分)",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "作品: 油印玻璃、馬賽克拼貼、鐵件 Oil printed on glass, mosaic, iron 基作: 水泥",
    "PublicArt_Place": "高雄市苓雅區凱旋1路89號",
    "PublicArt_Funds": "224萬",
    "PublicArt_Unit": "高雄師範大學附屬高中",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "蔡獻友、吳守哲、蘇信義、葉耕柏、魯台營、蔡典謨",
    "PublicArt_SelectTeam": "蘇信義、陳雪妮、許一男、李億勳、葉耕柏、左太政、簡聿成",
    "PublicArt_Desc": "晨曦開天地、雋永映日紅、學子沁曉露、璀璨耀附中、花開芬芳逸、枝繁氣勢雄、扎根北辰上、昂首傲蒼穹 ＜樹。描＞的創作構想，主要是以扎根抽芽之能動性、「樹苗」與「素描」後設意義內容相互交疊鋪陳，同時以高雄師大附中環境場所之性格為基底，呈現附中自然景觀、人文特色、生活詩化之「視覺意象」與「抽象思維」交互參滲所因蘊而生的公共藝術作品，逐層演繹附中優良傳統與教育理念主題設置的精神標的；誠如附中人所在的當下，搜尋形象記憶中所不斷衍生交疊甚或跳躍式的圖像畫面，在心理上所留下印記，在感官所留下印象，心領神會地去思索一己的生命情境，蓬勃展現生命力的感性擴張。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704205810073.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3ba6cc1d-5861-4987-b196-cc72649a1acc",
    "PublicArt_Name": "海鎮",
    "PublicArt_Author": "謙漢設計有限公司",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長930cm、寬210cm、高510cm (單位:公分)",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "亮面不銹鋼、不鏽鋼烤漆、石材(654灰色)",
    "PublicArt_Place": "高雄市旗津區北汕巷50-72號",
    "PublicArt_Funds": "220萬",
    "PublicArt_Unit": "行政院海岸巡防署海洋巡防總局第五海巡隊",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林勝雄、陳明輝、劉國滄、陳雪妮、盛兆龍",
    "PublicArt_SelectTeam": "劉秀梅、曾國庭、歐秀卿、陳明輝、吳寬瀛、陳水財、林志銘、吳守哲、龔義昭、洪上翔",
    "PublicArt_Desc": "『海鎮』：鎮海之意。一鎮於此，風平浪靜。 傳達「坐鎮」與「鎮守」之意涵。比喻海巡隊肩負之安定力與控制力。 球體代表「海之鎮」，石柱漸變刻痕乃海浪意象之轉化，橘色波浪乃呼應海巡人員的工作服色彩。 期待藉由「海鎮」的設置，為場域注入一股生命力，進而凝聚海巡人員的精神。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172923697.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172924367.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "ddce35db-973f-4128-ae3e-cb2a26c732da",
    "PublicArt_Name": "保家衛國",
    "PublicArt_Author": "陳翰平(富景顧問有限公司)",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長195cm、寬130cm、高480cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "白花大理石、不銹鋼",
    "PublicArt_Place": "高雄市燕巢區安招村成功路一號",
    "PublicArt_Funds": "426.6(P209-P216，8件組)萬",
    "PublicArt_Unit": "行政院國軍退除役官兵輔導委員會岡山榮譽之家",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王宗海、張惠蘭、蘇志徹、吳瑪俐、陳水財、許英毅",
    "PublicArt_SelectTeam": "翁勝豐、張惠蘭、陳水財、吳旭峰、郭挹芬、侯淑姿、吳玉成",
    "PublicArt_Desc": "榮譽國民，國家英雄。作品以國旗之藍、白、紅三色作為標準色，外型如同母體及雙手，擁抱「生命的種子－台灣」。傳達榮民以生命守護國土的偉大情操。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704205918313.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "56e0068b-820f-45f2-bf06-e2fc45d139dd",
    "PublicArt_Name": "萬年長青",
    "PublicArt_Author": "陳翰平(富景顧問有限公司)",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長130cm、寬150cm、高150cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "白花大理石、玻璃",
    "PublicArt_Place": "高雄市燕巢區安招村成功路一號",
    "PublicArt_Funds": "426.6(P209-P216，8件組)萬",
    "PublicArt_Unit": "行政院國軍退除役官兵輔導委員會岡山榮譽之家",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王宗海、張惠蘭、蘇志徹、吳瑪俐、陳水財、許英毅、",
    "PublicArt_SelectTeam": "翁勝豐、張惠蘭、陳水財、吳旭峰、郭挹芬、侯淑姿、吳玉成",
    "PublicArt_Desc": "作品雕鑿出長青樹的造型，期許榮民身體健康，亦象徵榮民的功績，名留青史傳頌萬世。長青樹之紅色葉脈代表榮民落地生根，與台灣土地血脈相連之意涵。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211522102.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "c4785e44-8b07-49e5-8923-d7f92092ef0b",
    "PublicArt_Name": "心靈城堡(A、B兩件)",
    "PublicArt_Author": "陳翰平(富景顧問有限公司)",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長780cm、寬20cm、高50cm(2件)",
    "PublicArt_Type": "玻璃 - 玻璃纖維",
    "PublicArt_Material": "玻璃纖維、泥作、油漆",
    "PublicArt_Place": "高雄市燕巢區安招村成功路一號",
    "PublicArt_Funds": "426.6(P209-P216，8件組)萬",
    "PublicArt_Unit": "行政院國軍退除役官兵輔導委員會岡山榮譽之家",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王宗海、張惠蘭、蘇志徹、吳瑪俐、陳水財、許英毅、",
    "PublicArt_SelectTeam": "翁勝豐、張惠蘭、陳水財、吳旭峰、郭挹芬、侯淑姿、吳玉成",
    "PublicArt_Desc": "1.心靈城堡A：加入山水意象，使作品更具色彩，增添視覺效果。\r\n2.心靈城堡B：火車，象徵岡榮幼稚園培育、帶領下一代，展現未來的希望；亦是過去、現在、未來的接續。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704210035448.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0b700f06-76b6-4af7-8d0f-f864cb7abcd5",
    "PublicArt_Name": "開疆",
    "PublicArt_Author": "陳翰平(富景顧問有限公司)",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長800cm、寬140cm、高160cm",
    "PublicArt_Type": "",
    "PublicArt_Material": "天然石材",
    "PublicArt_Place": "高雄市燕巢區安招村成功路一號",
    "PublicArt_Funds": "426.6(P209-P216，8件組)萬",
    "PublicArt_Unit": "行政院國軍退除役官兵輔導委員會岡山榮譽之家",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王宗海、張惠蘭、蘇志徹、吳瑪俐、陳水財、許英毅、",
    "PublicArt_SelectTeam": "翁勝豐、張惠蘭、陳水財、吳旭峰、郭挹芬、侯淑姿、吳玉成",
    "PublicArt_Desc": "作品以如山之整塊石材原石雕鑿製成，有如國畫的山水構圖。圓洞代表榮民克服險惡環境穿鑿隧道的功績。整體傳達榮民對國家建設不分晝夜、努力不懈的付出。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211649484.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7760b7be-4d3f-4f9a-808e-f8d0b917d1c4",
    "PublicArt_Name": "飛躍",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "130 × 120 公分 4座",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "鋼板、鋼管、不锈鋼球、烤漆",
    "PublicArt_Place": "高雄市左營區自由三路478號",
    "PublicArt_Funds": "58(P202-P204，3件組)萬",
    "PublicArt_Unit": "高雄市新民國小",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "林清玉、陳雪妮、陳立民、蘇連陳、王漢瑞",
    "PublicArt_SelectTeam": "林清玉 、郭慧雅、蘇志徹 、邱秋德、張清淵、高聖賢、吳寛瀛",
    "PublicArt_Desc": "四根圓柱上，焊接造形出四座踢足球的學童人形，代表新民國小對於足球的重視及運動的發展，小朋友身上四種不同的顏色，分別為色彩三原色(紅、黃、藍)和色光三原色(紅、綠、藍)，象徵學校在一般學科之外亦致力於美術教育的發展。而作品中象徵足球飛動軌跡的流動符號，則代表著上升耀動的推進力量。多種意象融和其中，正是新民國小於各領域多元均衡發展的最佳寫照。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211719693.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "37c29c58-71a5-4bdc-93cd-eda0310e08bc",
    "PublicArt_Name": "花間夢遊",
    "PublicArt_Author": "盧明德、郭挹芬",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "120*120cm（共2件）",
    "PublicArt_Type": "其他 - 光柵板",
    "PublicArt_Material": "光柵板",
    "PublicArt_Place": "高雄市大寮區大寮站 月台層樓梯壁面",
    "PublicArt_Funds": "12.5萬",
    "PublicArt_Unit": "高雄捷運公司",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "盧友義、蔡獻友、劉克強、白雅玲、吳旭峰、郭瑞坤、張淵舜",
    "PublicArt_SelectTeam": "陳俊穆、李俊賢、王哲雄、周雅菁、吳守哲、盧友義、郭瑞坤",
    "PublicArt_Desc": "貫穿車站動線要道上，以鮮明、歡悅的色彩，蜻蜓穿梭疊映其間。作品材質運用光柵立體幻影動畫變圖效果，營造旅客流動速度與驛站轉運之視覺特色。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211426700.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "41d3e637-9f83-4ef3-98bf-e6fe3a5e8c98",
    "PublicArt_Name": "文武春秋",
    "PublicArt_Author": "林維俞 楊慧如",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長  1500  cm、寬  1334  cm、高  190  cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼、鋼筋、混凝土、紅磚、清水磚、磁磚、玻璃纖維",
    "PublicArt_Place": "高雄市左營區曾子路281號",
    "PublicArt_Funds": "220萬元",
    "PublicArt_Unit": "高雄市立左營國民中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王金龍委員、許一男委員、陳水財委員、李億勳委員、李慧蓉委員、張益得委員",
    "PublicArt_SelectTeam": "陳明輝委員、陳水財委員、許一男委員、張新丕委員、曾媚珍委員",
    "PublicArt_Desc": "左營歷來為軍事重鎮，多次經歷兵燹，今日亦為軍事要地，因此作品以棋局象徵左營之特殊地理位置，象棋為傳統之技藝，廣受民眾喜愛與研究，棋藝讓人富思考與邏輯，猶如教育培養學生之智育，其中之道理深奧廣闊。\r\n    以立體之象棋造型，將各角色具象化，並結合街道家俱之構想，配合棋局「七星聚會」之走位，師生民眾可在此休憩活動。「七星聚會」是聞名之棋局，變化使人深感興趣。深具高度藝術性與變化莫測，不同之走法，形成不同之結局，為棋藝局最具代表者。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618164722428.JPG",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618164723135.JPG",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618164721792.JPG"
    ]
  },
  {
    "PublicArt_INDEX": "6931ea55-7f6c-41c2-9a84-fecab13b2fa1",
    "PublicArt_Name": "天使信差",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2008",
    "PublicArt_Size": "長 180 cm、寬 180 cm、高 900 cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不锈鋼",
    "PublicArt_Place": "高雄市林園區鳳林路1段176號",
    "PublicArt_Funds": "100(P207-P208，2件組)萬",
    "PublicArt_Unit": "中華郵政股份有限公司鳳山郵局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林清勇、洪明宏、陳水財、郭小菁、林麗華、林彰武、許智遠、洪淑慧、李永龍",
    "PublicArt_SelectTeam": "曾俊彥、楊文霓、張栢烟、吳旭峰、蘇志徹、林彰武、許智遠、洪淑慧、李永龍",
    "PublicArt_Desc": "飛鳥的造型很美，象徵溫暖、平和，是天使信差。 經創意轉折以不鏽鋼管搭造成型，具雅俗共賞的視覺傳達功能，呈現郵局與民眾之間的親和關係。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211802080.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "68469ee6-a84a-41f8-8812-f1a2c6cc5ad6",
    "PublicArt_Name": "傳承之舞",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "長 180 cm、寬 180 cm、高 420 cm",
    "PublicArt_Type": "金屬 - 青銅",
    "PublicArt_Material": "青銅、花崗石",
    "PublicArt_Place": "高雄市前鎮區中山三段43號",
    "PublicArt_Funds": "125萬",
    "PublicArt_Unit": "高雄市立獅甲國民中學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "李進丁、林杏鴻、王漢瑞、許一男、蘇信義、郭瑞坤、吳佩荃、張世焜",
    "PublicArt_SelectTeam": "李俊賢、陳雪妮、吳旭峰、楊文霓、盧友義、陳瑞文",
    "PublicArt_Desc": "在校園入口設置以舞獅為題之雕塑，大人高舉獅頭，兒童隨後附合起舞。讓大人與小孩互動於民藝之間，象徵學校的傳承功能，兼具顯示地方文化特色",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704212013615.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "c1b04b2c-b954-4ef8-8f5b-f931fc021fba",
    "PublicArt_Name": "解碼大地生機",
    "PublicArt_Author": "黃裕榮 、 駱信昌 、 黃裕和",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "200(寬)×1200(長)×550(高)",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "和平白大理石、銅、樹",
    "PublicArt_Place": "高雄市楠梓區大學路700號",
    "PublicArt_Funds": "420(P150-P151，2件組)萬",
    "PublicArt_Unit": "國立高雄大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "黃英忠、蘇志徹、陳雪妮、侯淑姿、鄭洲楠、倪碧華、蕭木川、曾梓峰、邱琬琦",
    "PublicArt_SelectTeam": "黃世孟、曾梓峰、康錦樹、陳水財、賴新龍、梁任宏、楊文霓",
    "PublicArt_Desc": "本創作以一把復古鑰匙，插於石頭上，代表探索之鑰為創作靈感出發點，一切故事從這邊開始。 鑰匙代表解碼...找尋...發現之意象。石頭意涵地表的延伸與特徵。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211909698.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "fabdfad7-c839-406d-83dd-e8fe0fbb42c7",
    "PublicArt_Name": "拱心山水天地間",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "85 × 85 × 800㎝",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "鋼鐵、不銹鋼、玻璃、LED",
    "PublicArt_Place": "高雄市左營區菜公路1號",
    "PublicArt_Funds": "100萬",
    "PublicArt_Unit": "交通部鐵路改建工程局",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "蘇直評、王哲雄、李俊賢、蘇志徹、蘇信義、鄭文生、余維杰",
    "PublicArt_SelectTeam": "李俊賢、林平、蘇信義、張正仁、蘇志徹、楊文霓、盧友義",
    "PublicArt_Desc": "本作品從拱心石（Keystone）的概念出發，利用建築學上的象徵語，暗示本站是高雄發展關鍵，而「拱心石」意味誠敬之心矗立在連通開放天頂與崗石地板間，充滿流線體感的浮標造型上。 整體造型則暗示一種「尺度、測量、標定」的意味，造型、結構、線條、色彩均匯集於此，作品傳達出台鐵新左營站，位於輻奏地區的空間地理特質。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153105672.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153106245.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8e70ffe9-1e9a-4b9d-8639-e5c02b1cbe78",
    "PublicArt_Name": "培育",
    "PublicArt_Author": "歐啦工作室",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "長300cm*寬100*高 200cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼烤漆",
    "PublicArt_Place": "高雄市左營區自由三路一號 新莊國民小學誠樓中庭",
    "PublicArt_Funds": "41萬",
    "PublicArt_Unit": "高雄市新莊國民小學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "林右正、 蕭木川、 黃佩玲、 盧安來、蔡瑞益、 邱進福、 曾義盡",
    "PublicArt_SelectTeam": "邱進福、 許一男、 蔡瑞益、 洪明宏、 林右正",
    "PublicArt_Desc": "一、 書中跳躍而出的運動健將及跳著舞蹈的人隱喻學生學習知識之外能活用知識運用在各方面。 二、 表現師生在教與學的過程中充滿快樂與活潑氣氛。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704211938444.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "030b4cba-4068-426f-ba69-cdd97d48cb8b",
    "PublicArt_Name": "鳳凰朝陽-朝陽初升",
    "PublicArt_Author": "曾英棟",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "高500cm、直徑 50 cm",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "FRP、鋼板、馬賽克、RC",
    "PublicArt_Place": "高雄市小港區鳳陽街2號",
    "PublicArt_Funds": "129.274(P156-P157，2件組)萬",
    "PublicArt_Unit": "高雄市小港區鳳陽國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "李俊賢、張惠蘭、翁英惠、汪碧芬、盧福壽、王維潔、王漢瑞、吳秋惠、黃志強",
    "PublicArt_SelectTeam": "陳水財、翁英惠、汪碧芬、盧福壽、陳雪妮、王漢瑞、吳秋惠",
    "PublicArt_Desc": "朝陽初升是一個柱狀的公共藝術作品，也是表演劇場的重要佈景，以曲形微作螺旋狀的柱身，表現出日出時太陽緩緩上升的感覺。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704212633735.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "118f4b8f-0bd6-4d66-a9e9-cff2940305a1",
    "PublicArt_Name": "每一個人的光環",
    "PublicArt_Author": "王存武",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "8000 x 3000 x 370 cm",
    "PublicArt_Type": "金屬 - 鐵鋁合金",
    "PublicArt_Material": "鋁合金 發光二極體與紅外線控制器",
    "PublicArt_Place": "高雄市左營區菜公路1號",
    "PublicArt_Funds": "121.4705萬",
    "PublicArt_Unit": "交通部鐵路改建工程局",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "蘇直評、王哲雄、李俊賢、蘇志徹、蘇信義、鄭文生、余維杰",
    "PublicArt_SelectTeam": "李俊賢、林平、蘇信義、張正仁、蘇志徹、楊文霓、盧友義",
    "PublicArt_Desc": "如果你覺得車站的宏偉只會讓人多走不少路，藝術品的塗抹扭捏也只是各自的炫耀，那麼這點光彩或可搏君一燦。只為你點亮的光環宣示主角出場了：每一個使用車站的人才是主角。 光環與建築諧調的造型質感融入環境的一角，沒有突兀的造型色彩也不搶佔舞台，只在你的來到時發出所有光彩來榮耀你。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621152701406.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "90e6e53b-8da0-4fc1-904c-c5d38d80e99c",
    "PublicArt_Name": "停看聽",
    "PublicArt_Author": "阿曼‧費南德茲",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "580*380*260cm",
    "PublicArt_Type": "玻璃 - 強化玻璃",
    "PublicArt_Material": "金屬、玻璃",
    "PublicArt_Place": "高雄市左營區站前北路1號 新左營火車站內",
    "PublicArt_Funds": "1000萬",
    "PublicArt_Unit": "交通部鐵路改建工程局",
    "PublicArt_Method": "",
    "PublicArt_ActTeam": "蘇直評、王哲雄、李俊賢、蘇志徹、蘇信義、鄭文生、余維杰",
    "PublicArt_SelectTeam": "李俊賢、林平、蘇信義、張正仁、蘇志徹、楊文霓、盧友義",
    "PublicArt_Desc": "此作品將台鐵平交道警示交通號誌，以愉悅而奇特的重複組合，來表現「空間」賦予號誌新的面貌及意義。\r\n阿曼是少數在世時，即被寫入當代西洋藝術史的國際藝術大師，也是六零年代「新寫實主義」流派的代表人物之一。他將日常生活中的現成物品，以「重複」和「堆疊」的形式手法，重新去詮釋各個物件獨特的本質、美感和量感。\r\n\t2004年底阿曼接受本案委託，特別為台鐵新左營站創作本作品。2005年10月阿曼過世，2006年由阿曼工作室團隊來台執行製作，成為阿曼生前最後創作的一件公共藝術遺作。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120712153314766.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9b1422e5-2d9a-47e2-bb35-be92caaec214",
    "PublicArt_Name": "舵",
    "PublicArt_Author": "陳枝明",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "600*400*350cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼",
    "PublicArt_Place": "高雄市楠梓區大學26街1150 號",
    "PublicArt_Funds": "120萬",
    "PublicArt_Unit": "高雄市援中國民小學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "蕭木川、蘇連陣、林右正、陳俐君老師、陳文龍、王洪鉞、林文佑",
    "PublicArt_SelectTeam": "蕭木川、陳燕如、許一男、蘇信義、吳怡葵",
    "PublicArt_Desc": "作品以風帆、地球意向為整體造型，有乘風破浪，世界觀之意，因此，作品具有勇往直前，不畏巨浪，揚眉於國際之喻意。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150446789.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621150445848.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "522c425b-a843-4f50-9b9a-bb6d83458c35",
    "PublicArt_Name": "演武",
    "PublicArt_Author": "旗津窯文化藝術有限公司",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "公共藝術燈柱：251*52*40cm*3座，導覽圖：130*130*15cm，標示牌：341*105*15cm",
    "PublicArt_Type": "玻璃 - 強化玻璃",
    "PublicArt_Material": "磚、陶、玻璃、鍛鐵、燈光",
    "PublicArt_Place": "高雄市鼓山區，公共藝術燈三座：登山街與壽山街口、濱海二路與長安街口、臨海二路與鼓波街口。導覽圖：濱海二路與長安街口花台。標示牌：武德殿。",
    "PublicArt_Funds": "200萬",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "劉秀梅、吳梅嵩、陳水財、方惠光、蘇志徹、盧友義、龔天發",
    "PublicArt_SelectTeam": "劉秀梅、龔天發、陳水財、邱國峻、林尚瑛",
    "PublicArt_Desc": "運用獅子來代表不武、不屈、不畏的精神，獅子為萬獸之王，有雄壯、威武的意象，以與武德殿建築意象同材料，雕塑獅子及武德殿建築元素意象於磚上。融合武德殿的文化精神和建築元素，讓作品能融入當地街道景觀，同時兼具指標性和街道照明的功能。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704221730544.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "63a71ca5-edea-4fe9-b045-b9946ac25f3a",
    "PublicArt_Name": "扶家祐子",
    "PublicArt_Author": "劉高興",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "手：250*120*120cm*2件，球體：直徑60~100cm*3件，房屋結構體：70*60cm*2件",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼管、擴張網",
    "PublicArt_Place": "高雄市楠梓區興楠路182號",
    "PublicArt_Funds": "53萬",
    "PublicArt_Unit": "台灣高雄少年法院",
    "PublicArt_Method": "",
    "PublicArt_ActTeam": "莊秋桃、趙首智、蘇信義、蔡獻友、羅仲廷",
    "PublicArt_SelectTeam": "莊秋桃、郭榮煌、趙首智、張新丕、洪根深、梁冠英、謝永祥",
    "PublicArt_Desc": "「扶家祐子」以大手小手合體的造型象徵語言世界的差異以其不同文化層次的交流與包容。與少年法院92年設置的藝術品「運行」恰為延伸；但一造型極剛、一極柔，則形成有趣的對比；二組作品，都呈現濃郁的現代感與科技性格。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704221801889.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "6b23ed8f-07ff-44ab-8e95-b9de635f958c",
    "PublicArt_Name": "歸 心",
    "PublicArt_Author": "黃裕智",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "10 m × 10 m × 2.5m",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼、紅銅、黃銅",
    "PublicArt_Place": "高雄市左營區菜公路1號",
    "PublicArt_Funds": "100萬",
    "PublicArt_Unit": "交通部鐵路改建工程局",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "蘇直評、王哲雄、李俊賢、蘇志徹、蘇信義、鄭文生、余維杰",
    "PublicArt_SelectTeam": "李俊賢、林平、蘇信義、張正仁、蘇志徹、楊文霓、盧友義",
    "PublicArt_Desc": "整組作品運用五個韻律的節奏形成流動的聚散，表現出車站的意象。相聚重逢時的欣喜，分離告別時的不捨，一幕幕不斷在車站裡上演，車站內上方的作品呼應聚合又散去的人們，像是替我們述說著複雜的心情。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621154030825.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "689e6dd9-ef98-4c4e-9d3a-b2b00fff9a70",
    "PublicArt_Name": "回",
    "PublicArt_Author": "曾宜秋",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "300*300*9cm",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶土、釉彩、強化玻璃",
    "PublicArt_Place": "高雄市楠梓區興楠路182號",
    "PublicArt_Funds": "53萬",
    "PublicArt_Unit": "台灣高雄少年法院",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "莊秋桃、趙首智、蘇信義、蔡獻友、羅仲廷",
    "PublicArt_SelectTeam": "莊秋桃、郭榮煌、趙首智、張新丕、洪根深、梁冠英、謝永祥",
    "PublicArt_Desc": "當初在異鄉因為無意中翻出小盒子內的貝殼，兒時在海邊撿貝殼的快樂回憶，湧上心頭， 想起叛逆的青少年時期與家人的衝突與互動，思鄉的心情油然而生。成型每一個貝殼的時候，似乎也探討著我與家的關係，進而轉化成這個作品，作品名為「回」。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704221828669.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "86937372-231e-4c52-9f92-aa2905fdd4b3",
    "PublicArt_Name": "創思、進取、關懷",
    "PublicArt_Author": "洪孟佳",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "長1000 cm、深 500cm、高300 cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼烤漆",
    "PublicArt_Place": "高雄市左營區海功東路2號",
    "PublicArt_Funds": "79.9995萬",
    "PublicArt_Unit": "高雄市屏山國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "黃金水 、王錦雲 、王洪鉞、翁英惠、林右正、許一男、林熺俊",
    "PublicArt_SelectTeam": "藍奉中、陳昱銘、林右正、王國憲",
    "PublicArt_Desc": "以「德、智、體、群、美」為主要構想，學生日常活動之姿勢為主要造型來源，S形動線造型與校舍方正結構呼應，予以柔線之美。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704221859004.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "336e81c7-f581-4928-81fe-a3c4103c5326",
    "PublicArt_Name": "敦品勵學",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "作品：長500cm、寬800cm、高450cm：水池：長800cm、寬500cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "花崗石、青銅、不銹鋼、循環抽水機",
    "PublicArt_Place": "高雄市左營區重信215號 大門右側",
    "PublicArt_Funds": "130萬",
    "PublicArt_Unit": "高雄市福山國民中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "詹孟順、王怡文、詹信興、蔡瑞益、張清淵、許一男、邱秋德、黃權松",
    "PublicArt_SelectTeam": "黃權松 張慧如 陳聖頌 許一男 蔡瑞益",
    "PublicArt_Desc": "以磨損之筆尖結合校徽，將如鴿似手的圖形轉化為鳳凰，象徵師長對本校學生之期望。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704222114661.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "ba5c2a0f-7bab-4c53-bfee-a46c38e27bac",
    "PublicArt_Name": "飆風飆海之牆與2007",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "[個別]\r\n岸岩：300X300X30cm\r\n聽河：180X180X30cm   \r\n海照：120X120X30cm\r\n風洞：180X30X30cm\r\n[組合面積]\r\n岸岩：500X280X8cm\r\n聽河：380X900X60cm\r\n海照：550X300X30cm\r\n風洞：180X7000X30cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "熱侵鍍鋅環氧烤漆鋼構、不鏽鋼、鐵件",
    "PublicArt_Place": "高雄市旗津區西臨港線大義街與大勇路 駁二藝術特區鐵道",
    "PublicArt_Funds": "2233000",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "許一男、吳梅嵩、劉富美、劉秀梅",
    "PublicArt_SelectTeam": "歐秀卿、陳水財、吳梅嵩、蘇志徹、洪根深",
    "PublicArt_Desc": "通常公共藝術設計方案採取可讀性高的，因本案設置在駁二藝術特區周邊，因此設置目標之純藝術性較高。本案作品計有四件，創作的角度「以造型藝術的戲劇性和衝突性」創造讓人難忘的強烈印象，同時以海洋高雄為出發，將海、海風、海螺、愛河等流動意象加進作品，期望彰顯出海洋城市獨特藝術風貌。\r\n\r\n岸岩\r\n以大小不一的三個圓形螺旋組件為一件作品，將海邊岩石的意象，轉化成柔性的具有變化的圈圈造型。\r\n\r\n聽河\r\n類似小卷(海產)的造型，以色澤鮮艷的色彩意象為視覺呈現，又以如風箏般輕飄飄的飛揚姿態，高高懸掛在殘壁上，也同時呼應著原有牆面的塗鴉，強調活潑的新鮮朝氣。\r\n\r\n海照\r\n以數十多個圓形不鏽鋼鏡面，鋪排而成陳列於大牆面上，購成一片可以反射出日照、雲彩、夕陽、綠意的鏡牆。\r\n\r\n風動\r\n宛如風一來，置於壁面上的一連串螺旋狀管子，都會跟著旋轉起來，也彷彿可以聽到海風呼呼的聲音，從耳邊傳來。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120801132905628.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120801132904547.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120801132905462.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120801132904995.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "18321689-3537-4ac7-8a9f-9e0878dce9d0",
    "PublicArt_Name": "薪傳",
    "PublicArt_Author": "王國益",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "「圓形場」：360×60×360cm「獨木舟」：60×300×120cm「門」：240×210×40cm×3個「帆船」：船型結構 60×300×120cm ＋ 船帆結構 480×240×4.5cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "花崗石、柚木、霧面不銹鋼",
    "PublicArt_Place": "高雄市燕巢區深水村深中路58號 商學院教學大樓前廣場北側",
    "PublicArt_Funds": "278萬",
    "PublicArt_Unit": "國立高雄應用科技大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "黃文玲、洪上翔、林美秀、郭進春、林兆群、陳榮方、潘榮進",
    "PublicArt_SelectTeam": "顧世勇、陳明輝、張栢烟、李俊賢、翁英惠、林熺俊、洪上翔",
    "PublicArt_Desc": "「圓形場」：「圓」是世界一切生命物種和物質的根「源」，象徵國立高雄應用科技大學當時創校的源頭。 「獨木舟」：意味人生的成長猶如孤坐獨木舟，航向未知的世界與人生，代表過去的努力與現在的奮鬥。 「門」：是人生之門、大學之門、生命之門，以「花崗石」、「柚木」、「霧面不銹鋼」比喻國立高雄應用科技大學三次改制的成長經歷。 「帆船」：「薪『船』」，意味國立高雄應用科技大學的傳承。而揚帆之船象徵航向光明的未來。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704222039926.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "57d9ceb9-729b-42c1-af48-9b736950624b",
    "PublicArt_Name": "聽海",
    "PublicArt_Author": "張錦朗",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "長600 cm、寬 300cm、高200cm",
    "PublicArt_Type": "金屬 - 青銅",
    "PublicArt_Material": "青銅、不銹鋼",
    "PublicArt_Place": "高雄市鹽埕區大智路150號",
    "PublicArt_Funds": "90萬",
    "PublicArt_Unit": "高雄市光榮國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "呂淑屏、 陳明富、王漢瑞、陳雪妮、黃郁生、蔡獻友",
    "PublicArt_SelectTeam": "呂淑屏、 陳明富、吳奕德、吳守哲、張錦郎、陳雪妮、黃郁生",
    "PublicArt_Desc": "由於學校正面臨被型塑為「水與綠－海洋首都」的生活意象，因此直接聯想到以耳朵造型為出發構想，進而以螺旋狀表現海浪之優美曲線，自然環境形成類似海螺狀之造型。如同海浪聲不絶於耳旁響起，營造大自然之音，氣勢蓬勃。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163541036.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163541163.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "75e13078-9253-4b3a-89a2-9b028a0fecec",
    "PublicArt_Name": "客家藍衫",
    "PublicArt_Author": "居室室內裝工程股份有限公司",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "L640cm x W165cm x H250cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹綱",
    "PublicArt_Place": "高雄市美濃區高140線旗陽橋與台28線中壇橋",
    "PublicArt_Funds": "365(P170-P171，2件組)萬",
    "PublicArt_Unit": "高雄市政府觀光局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林熺俊、李俊賢、洪瑞玲、陳建明、吳旭峰",
    "PublicArt_SelectTeam": "林熺俊、羅建德、張栢烟、林麗華、顏杏砡、汪碧芬",
    "PublicArt_Desc": "利用客家藍衫的生活記憶及意涵，作為美濃入口的象徵。車行動線過程中，經由行進過程藉由作品之曲度變化，產生如同布幔之飄動感，以表達藍衫布不定形之形體特性，並利用主原色-藍色作為入口意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704222008460.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a4268ed7-f056-463a-8523-338e3dfbf6ab",
    "PublicArt_Name": "穿透",
    "PublicArt_Author": "陳昱銘",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "1100*240*270cm (單位:公分)",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼",
    "PublicArt_Place": "高雄市三民區十全一路202號",
    "PublicArt_Funds": "80萬",
    "PublicArt_Unit": "高雄市博愛國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "蔡玉寶、蕭木川、林雅靜、王彥喦、王漢瑞",
    "PublicArt_SelectTeam": "蘇信義、王漢瑞、蘇連陣、蔡玉寶、蘇志徹",
    "PublicArt_Desc": "以博愛國小學生電腦立體繪圖遊戲為靈感的作品，運用實體與穿透立體造型交錯產生空間和光影的變化，並運用鮮明色彩營造出活潑感。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704212425311.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "4a14f864-b10c-4356-bbcc-44b1a3d406ec",
    "PublicArt_Name": "圓善",
    "PublicArt_Author": "陳庭詩",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "高205cm",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鑄鐵",
    "PublicArt_Place": "高雄市楠梓區興楠路182號",
    "PublicArt_Funds": "90萬",
    "PublicArt_Unit": "台灣高雄少年法院",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "莊秋桃、趙首智、蘇信義、蔡獻友、羅仲廷",
    "PublicArt_SelectTeam": "莊秋桃、郭榮煌、趙首智、張新丕、洪根深、梁冠英、謝永祥",
    "PublicArt_Desc": "作品設置於「家事法庭」右側庭園，為已故雕塑家陳庭詩先生的鋼雕創作。至拙至簡的筆觸，卻清晰敘述著人世「善念扶持、圓化殘缺、大愛創造」的智慧，完全契合了「家事法庭」獨特的場域精神。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704212038733.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "bf347e3e-ba41-48dd-b3eb-30eddb7f95f0",
    "PublicArt_Name": "對話",
    "PublicArt_Author": "黃裕榮 、 駱信昌 、 黃裕和",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "人本: 140W×155H×55D cm心靈: 200W×240H×55D cm不銹鋼球體: 直徑110 cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "和平白大理石、不銹鋼",
    "PublicArt_Place": "高雄市楠梓區大學路700號",
    "PublicArt_Funds": "420(P150-P151，2件組)萬",
    "PublicArt_Unit": "國立高雄大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "黃英忠、蘇志徹、陳雪妮、侯淑姿、鄭洲楠、倪碧華、蕭木川、曾梓峰、邱琬琦",
    "PublicArt_SelectTeam": "黃世孟、曾梓峰、康錦樹、陳水財、賴新龍、梁任宏、楊文霓",
    "PublicArt_Desc": "本創作以摟空的雕刻手法將一個人頭像雕塑成「實」與「虛」，分別代表「人本」與「心靈」，藉以一個亮面金屬球將作品與大環境縮影並連結在一起，充分意象出社會大眾的互動情境。 整個畫面呈現出一個現在進行式的互動景象，同時隱喻說明人的社會互動關係，從個體認識自己開始，學習與自己的心靈「對話」。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704212355651.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3800093d-4511-4b61-b810-0fb99d6d5777",
    "PublicArt_Name": "給美嚇到",
    "PublicArt_Author": "許自貴",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "壁面龍長 110 cm、寬60cm、高30cm 重1.2kg 及1.5kg\r\n草地青蛙1長80cm、寬60cm、高50cm重1.12kg\r\n草地青蛙2長70cm、寬50cm、高30cm重8kg\r\n草地青蛙2長70cm、寬50cm、高50cm重3.7kg",
    "PublicArt_Type": "石材 - 水泥",
    "PublicArt_Material": "水泥、油漆、鐡件、矽利康",
    "PublicArt_Place": "高雄市苓雅區漢陽街17號 高雄市苓雅區福康國小升旗台前草坪/第一棟樓梯走廊/進校門後右棟建築牆面",
    "PublicArt_Funds": "26.5萬",
    "PublicArt_Unit": "高雄市福康國小",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "陳雪妮  吳梅嵩  陳水財  吳淑明  王漢瑞  蔡金柱",
    "PublicArt_SelectTeam": "吳梅嵩  洪明宏  楊明迭  蔡金柱  王漢瑞",
    "PublicArt_Desc": "校園本間已填充許多小物品，太過於巨大的藝術品會使校園空間更形擁擠。小學生個性開朗活潑，故以色彩鮮明的小型動物造型做為設計構想。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704212605965.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5bef6e20-713f-469b-956c-134d5c7ac9c1",
    "PublicArt_Name": "竹龍",
    "PublicArt_Author": "居室室內裝工程股份有限公司",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "L260cm x W180cm x H650cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "綱管、綱構",
    "PublicArt_Place": "高雄市美濃區高140線旗陽橋與台28線中壇橋",
    "PublicArt_Funds": "365(P170-P171，2件組)",
    "PublicArt_Unit": "高雄市政府觀光局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林熺俊、李俊賢、洪瑞玲、陳建明、吳旭峰",
    "PublicArt_SelectTeam": "林熺俊、羅建德、張栢烟、林麗華、顏杏砡、汪碧芬",
    "PublicArt_Desc": "中壇橋附近有一處龍的雕像，宛如中壇橋的守護神，此設計概念延續當居民心靈守護一龍之意象轉化。 利用竹龍諧音為「竹籠」具體顯現客家文化。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704212507566.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "e46a26d0-8778-4f7c-9605-0b1c9bec9698",
    "PublicArt_Name": "抽象的蝴蝶",
    "PublicArt_Author": "林維訓",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "長410*寬650*高420cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼",
    "PublicArt_Place": "高雄市三民區十全一路200號",
    "PublicArt_Funds": "80萬",
    "PublicArt_Unit": "高雄市立三民國民中學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "黃郁生、許一男、顏杏砡、黃仁星、曾啟川、吳靜嫻、鐘文杰",
    "PublicArt_SelectTeam": "黃仁星、曾啟川、吳靜嫻、蘇信義、黃郁生、翁英惠",
    "PublicArt_Desc": "「Beauty」象徵學校追求，求真、至善、達美的學校願景。 「Fly」代表學校整體向上提升之意。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704212538429.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9dcc4854-934f-41d9-bbfb-81961fec6d01",
    "PublicArt_Name": "舐犢情深",
    "PublicArt_Author": "方惠光",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "長300cm、寬200cm、高150cm",
    "PublicArt_Type": "金屬 - 青銅",
    "PublicArt_Material": "青銅",
    "PublicArt_Place": "高雄市左營區蓮潭路47號",
    "PublicArt_Funds": "67.2萬",
    "PublicArt_Unit": "高雄市左營區舊城國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "方永川、吳隆榮、鍾奇峰、林勝雄、翁英惠、李俊賢、郭文昌、黃振祥、賴南宏",
    "PublicArt_SelectTeam": "方永川、吳隆榮、鍾奇峰、蘇信義、翁英惠、許一男、曾媚珍、陳秀薇、王永志",
    "PublicArt_Desc": "本作品「舐犢情深」除在歷史上與舊城國小的社區環境背景相扣之外，作品唯一母牛及一立姿小牛欲哺乳狀，寓意國小教師培育幼齡學子、提攜後進、作育英才之深情與美德。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704222300546.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5fd11502-8be4-462b-afff-7ca4b3324ec4",
    "PublicArt_Name": "停 看 聽",
    "PublicArt_Author": "阿曼",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "高5.7m × 長3m × 寬2.3m（含座） 水泥基座:水泥外貼花崗岩片 高1.5m × 長3m × 寬2.3m",
    "PublicArt_Type": "",
    "PublicArt_Material": "金屬",
    "PublicArt_Place": "高雄市左營區菜公路1號",
    "PublicArt_Funds": "1000萬",
    "PublicArt_Unit": "交通部鐵路改建工程局",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "蘇直評、王哲雄、李俊賢、蘇志徹、蘇信義、鄭文生、余維杰",
    "PublicArt_SelectTeam": "李俊賢、林平、蘇信義、張正仁、蘇志徹、楊文霓、盧友義",
    "PublicArt_Desc": "阿曼是少數在世時即被寫入當代西洋藝術史的國際藝術大師，也是六零年代「新寫實主義」流派的代表人物之一。他將日常生活中的現成物品以「重複」和「堆疊」的形式，重新詮釋物品獨特的本質、美感和量感。 本作品將台鐵平交道警示交通號誌重複組合，表現空間的虛實，賦予號誌新的面貌及意義。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153644322.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "79799086-0d7a-444b-8c81-7b623b02aa68",
    "PublicArt_Name": "與願",
    "PublicArt_Author": "鄭梃甄",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "240*105*110cm、165*100*70cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "泉州白花崗石",
    "PublicArt_Place": "高雄市左營區裕誠路1102號",
    "PublicArt_Funds": "85萬",
    "PublicArt_Unit": "高雄市立三民高級家事商業職業學校",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "黃秀霞、白雅玲、林麗華、何從、張淵舜、姚德忠、鄭洲楠、陳有華、陳聖頌",
    "PublicArt_SelectTeam": "盧明德、陳水財、唐自常、曾媚珍、鄭洲楠、姚德忠、何從",
    "PublicArt_Desc": "手的意象則同時兼具「歡迎」與「接受外來的新知」之意涵。藉由手互相對話的形式，在橫向面強調「互助」與「內外相容」的關係，縱向面則強調「薪傳相承」的概念。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704222237154.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "eb0a9cc1-367f-4eae-8a94-563ddf265943",
    "PublicArt_Name": "圖。像。遊",
    "PublicArt_Author": "劉育明",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "壁面－1313 x 60 x 274-311（h）cm 空橋－6969.5 x 5 x 115（h）cm 月台－2918 x 5 x 112（h）cm（一組） 剪票口－1113 x 5x 115（h）cm（一組）",
    "PublicArt_Type": "數位影像 - 數位影像玻璃",
    "PublicArt_Material": "PMI油印玻璃、鐵件",
    "PublicArt_Place": "高雄市左營區菜公路1號",
    "PublicArt_Funds": "149.5萬",
    "PublicArt_Unit": "交通部鐵路改建工程局",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "蘇直評、王哲雄、李俊賢、蘇志徹、蘇信義、鄭文生、余維杰",
    "PublicArt_SelectTeam": "李俊賢、林平、蘇信義、張正仁、蘇志徹、楊文霓、盧友義",
    "PublicArt_Desc": "「圖。像。遊移」創作概念以三鐵共構的「速度」意象轉化為視覺極簡的黑色色塊及線條，並採用的大高雄人物紀實照，和噴沙玻璃上左營古城照片的瞬間凝結，企圖以當代思維方式將不同的事件壓縮在共時的結構中，呈現出一個突然靜止的瞬間達到完滿形式出現的場域，另一種非時方式的速度感。 作品中的圖像經由塗抹、修改所呈現出嬉遊、荒謬的能量，是作者在商品與消費文化問題如滾雪球般不斷滲透和擴大的同時，提供另一種幽默、有趣的觀察方式。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153903405.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153903508.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153902463.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "b3a35e76-f011-4bee-abd2-4cf300d781d3",
    "PublicArt_Name": "鳳凰朝陽-鳳凰展翅",
    "PublicArt_Author": "曾英棟",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "長 1500 cm、寬 1000 cm、高 450 cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "RC、鋼板、鋼管",
    "PublicArt_Place": "高雄市小港區鳳陽街2號",
    "PublicArt_Funds": "129.274(P156-P157，2件組)萬",
    "PublicArt_Unit": "高雄市小港區鳳陽國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "李俊賢、張惠蘭、翁英惠、汪碧芬、盧福壽、王維潔、王漢瑞、吳秋惠、黃志強",
    "PublicArt_SelectTeam": "陳水財、翁英惠、汪碧芬、盧福壽、陳雪妮、王漢瑞、吳秋惠",
    "PublicArt_Desc": "鳳凰的身體各部「鳳首」、「鳳翅」、「鳳身」、「鳳尾」作變化，鳳首昂頭表現初新生鳳凰對這個世界的好奇，有隱喻鼓勵學生以其強烈的好奇心探索世界，努力向學。本件作品不僅供遊戲休憩使用，更是表演劇場的背景呢！",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704212238694.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "b5958d31-e593-4e47-8c7a-69e0816d253f",
    "PublicArt_Name": "悠遊的雲",
    "PublicArt_Author": "李昀珊",
    "PublicArt_Year": "2007",
    "PublicArt_Size": "88 x 50 x 38(h)cm、60 x 39 x 34(h)cm、117 x 81 x 46(h)cm、105 x 86 x 45(h)cm、173 x 104 x 43(h)cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "鑄銅、鑄不銹鋼",
    "PublicArt_Place": "高雄市左營區菜公路1號",
    "PublicArt_Funds": "100萬",
    "PublicArt_Unit": "交通部鐵路改建工程局",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "蘇直評、王哲雄、李俊賢、蘇志徹、蘇信義、鄭文生、余維杰",
    "PublicArt_SelectTeam": "李俊賢、林平、蘇信義、張正仁、蘇志徹、楊文霓、盧友義",
    "PublicArt_Desc": "「悠遊的雲」創作概念來自於「浮雲遊子」，以雲的形象創造一種移動和旅行的感覺，用藝術造型提供來往的旅客一組可以休憩的座椅，作品採用鑄銅和不銹鋼材質，以金屬材質反射空間影像，與整個場域環境產生對話。車站裡人來人往，火車一站過一站，我們總是在移動和旅行之中經歷人生的喜怒哀樂。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153715144.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153714892.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "b5c25dee-0278-43b2-baa1-59a6ca7439be",
    "PublicArt_Name": "朝山 Toward the Mountain",
    "PublicArt_Author": "梁任宏Liang Ren-Hong",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "525 x30x221cm",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "鋼鐵",
    "PublicArt_Place": "高雄市鼓山區鼓山三路與新疆路交叉口 壽山龍井社區登山步道",
    "PublicArt_Funds": "33萬",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "蘇志徹、許一男、陳水財、江景偉、鄒文俊",
    "PublicArt_SelectTeam": "許一男、陳水財、呂德育、藍培榮",
    "PublicArt_Desc": "長影是增長的化身，象徵登山者力求步步高升的精神，鋼鐵是強健體魄的材質語言與高雄精神，猴群是地域的最佳標示。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705194858961.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "d6190c24-65cb-4a45-b97c-8703ad318a61",
    "PublicArt_Name": "溝通Communication",
    "PublicArt_Author": "柯燕美Ke Yan-Mei",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "14.5x246x94cm",
    "PublicArt_Type": "陶瓷 - 陶板",
    "PublicArt_Material": "陶版、木框",
    "PublicArt_Place": "高雄市岡山區介壽路100號 財政部台灣省國稅局南區國稅局岡山稽徵所",
    "PublicArt_Funds": "100（P125-P127，3件組）萬",
    "PublicArt_Unit": "財政部台灣省國稅局南區國稅局岡山稽徵所",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "陳冠勳、洪明宏、竇國昌、陳金星、黃春木",
    "PublicArt_SelectTeam": "陳金星、洪明宏、陳炳宏、李達皓、王武森、陳春敏",
    "PublicArt_Desc": "以不同的符號、圖騰、色調的高溫陶板組合成溫馨的畫面，有如搭起一座稅務人員與納稅義務人之間的橋樑。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704222329125.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7d738d3e-2f12-4d51-8d74-0937369e6ba9",
    "PublicArt_Name": "遊刃有餘 Skillfulness",
    "PublicArt_Author": "江政恭 、 李哲凰Jiang Jheng- Gong 、 Lee Jhe-Huang",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "520x360x210cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "銅、花崗石",
    "PublicArt_Place": "高雄市小港區松和路一號",
    "PublicArt_Funds": "192萬",
    "PublicArt_Unit": "國立高雄餐旅學院",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "鄰春櫻、翁英惠、曾媚珍、張伯烟、張忠明、許登基、柯章南",
    "PublicArt_SelectTeam": "翁英惠、李億勳、許一男、黃郁生、許登基",
    "PublicArt_Desc": "作品以刀為造型，搭配若干廚具元素，用以闡揚庖丁解牛之學習精神。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705194804829.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0c561c57-963d-4bbb-bcdb-0314404d8f2c",
    "PublicArt_Name": "物換星移Change",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "110x110x320cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "南非黑花崗岩、紅洞石、不鏽鋼烤漆",
    "PublicArt_Place": "高雄市苓雅區五福四路 高雄市五福國際觀光大道",
    "PublicArt_Funds": "432（P112-P116，5件組）萬",
    "PublicArt_Unit": "高雄市政府公共藝術審議委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "劉秀梅、蔡獻友、盧友義、龔天發、倪再沁、陳惠婷",
    "PublicArt_SelectTeam": "王振安、陳坤崙、許一男、方惠光、盧友義",
    "PublicArt_Desc": "條碼是當代商品普遍使用的辨識符號，黑白對比鮮明設置於車水馬龍的街道，為城市注入一股活力。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163657787.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163657978.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163657529.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621163657670.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "23abc0c7-f73a-4350-889c-9265f20369a2",
    "PublicArt_Name": "飛揚的大樹 Flying Tree",
    "PublicArt_Author": "洪郁大Hong Yu-Da",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "作品Work：170x90x58cm，基座base：80×88×58cm",
    "PublicArt_Type": "金屬 - 黃銅",
    "PublicArt_Material": "作品：鑄銅。基座：鋼筋水泥、洗石子",
    "PublicArt_Place": "高雄市楠梓區藍昌路416號 高雄市立中山高級中學",
    "PublicArt_Funds": "22.72萬",
    "PublicArt_Unit": "高雄市立中山高級中學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "蔡清波、古春玲、沈志戎、胡銀富、林麗惠、陳建興、柳迥鋒",
    "PublicArt_SelectTeam": "蘇信義、許一男、蘇志徹、蔡清波、古春玲",
    "PublicArt_Desc": "造型與中山多功能活動空間的建築精神相結合，由輕柔的物體展現飛揚的造型，學生在此活動鍛鍊，成長茁壯，如大樹般有飛揚的發展和成就。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704222358206.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "62817617-71c8-4c65-b4db-a162272c5ea3",
    "PublicArt_Name": "生命的律動Rhythm of Life",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "140x70x210cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "大理石",
    "PublicArt_Place": "高雄市苓雅區五福四路 高雄市五福國際觀光大道",
    "PublicArt_Funds": "432（P112-P116，5件組）萬",
    "PublicArt_Unit": "高雄市政府公共藝術審議委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "劉秀梅、蔡獻友、盧友義、龔天發、倪再沁、陳惠婷",
    "PublicArt_SelectTeam": "王振安、陳坤崙、許一男、方惠光、盧友義",
    "PublicArt_Desc": "以植物生長的造型融合在「意」與「象」之間，以波浪的拍動，展現生命出現的感動。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621162521450.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "b45c2b74-2ead-4c4f-a522-aa3fb589e055",
    "PublicArt_Name": "風景Scenery",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "120x120 x 300cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "大理石",
    "PublicArt_Place": "高雄市苓雅區五福四路 高雄市五福國際觀光大道",
    "PublicArt_Funds": "432（P112-P116，5件組）萬",
    "PublicArt_Unit": "高雄市政府公共藝術審議委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "劉秀梅、蔡獻友、盧友義、龔天發、倪再沁、陳惠婷",
    "PublicArt_SelectTeam": "王振安、陳坤崙、許一男、方惠光、盧友義",
    "PublicArt_Desc": "透過雕刻，將山巒與白雲造型做結合。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621162603113.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621162602717.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "2486d39b-89fc-49f5-967f-a85eb59f4fb8",
    "PublicArt_Name": "再生之舞Wandering in the wind",
    "PublicArt_Author": "陳昌銘Chen Chang-Min",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "300cm（19支，19 pieces）、350cm（34支，34 pieces）、400cm（77支，77 pieces）",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼",
    "PublicArt_Place": "高雄市岡山區本州路168號 南區環保科技園區管理研究大樓",
    "PublicArt_Funds": "420萬",
    "PublicArt_Unit": "高雄市政府工務局",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "陳存聰、張文德、張曉昱、湯毓勳、盧盈志、王德普、吳旭峰、林熺俊",
    "PublicArt_SelectTeam": "盧明德、翁英惠、賴新龍、盧建明、湯毓勳、楊欽富",
    "PublicArt_Desc": "以自然風力表現視覺動感，並傳達生態永續經營之理念。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120704222434464.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "1d1bc5c5-c4ea-4cfe-818a-98ea2dc60b17",
    "PublicArt_Name": "街頭小憩Take a Break",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "80x80x80cm（4座4 pieces）",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "粉紅色花崗石",
    "PublicArt_Place": "高雄市苓雅區五福四路 高雄市五福國際觀光大道",
    "PublicArt_Funds": "432（P112-P116，5件組）萬",
    "PublicArt_Unit": "高雄市政府公共藝術審議委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "劉秀梅、蔡獻友、盧友義、龔天發、倪再沁、陳惠婷",
    "PublicArt_SelectTeam": "王振安、陳坤崙、許一男、方惠光、盧友義",
    "PublicArt_Desc": "四座咖啡杯式的街道傢具作品，為忙碌的現代人生活加入美感調劑。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621162444317.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "2daddb4c-a727-4a10-bb6b-b960d5ed7202",
    "PublicArt_Name": "時間記號",
    "PublicArt_Author": "李億勳Lee Yi-Syun",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "鼠Mouse 56x50cm、牛Cow 40x180cm、虎Tiger 62x72cm、兔Rabbit 40x70cm、龍Dragon 165x180cm、蛇 Snake 51x48cm、馬Horse 220x100cm、羊Sheep 122x100cm、猴Monkey 150x40cm、雞Chicken 73x80cm、狗Dog 35x80cm、豬Pig 70x100cm",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "瓷磚馬賽克、混凝土",
    "PublicArt_Place": "高雄市左營區華夏路800號 高雄市新光國民小學",
    "PublicArt_Funds": "79.9萬",
    "PublicArt_Unit": "高雄市新光國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "王肅雄、高志遠、陳明輝、王武森、陳宗雄、王漢瑞",
    "PublicArt_SelectTeam": "劉麗美、黃淑惠、陳明輝、洪上翔、林熺俊、蕭木川",
    "PublicArt_Desc": "以十二生肖來象徵時間的流動與輪替，藝術家結合傳統捏麵人及現代公仔，創作出具時代感知新造型。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153220233.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153221265.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153221723.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153219922.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153219683.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153221490.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153220496.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153219389.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621153220871.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "e2916d8b-282b-4c29-98dc-bbff1b84d24e",
    "PublicArt_Name": "三腳貓Three-feet Cat",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "220x70x50cm",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "大理石、馬賽克",
    "PublicArt_Place": "高雄市苓雅區五福四路 高雄市五福國際觀光大道",
    "PublicArt_Funds": "432（P112-P116，5件組）萬",
    "PublicArt_Unit": "高雄市政府公共藝術審議委員會",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "劉秀梅、蔡獻友、盧友義、龔天發、倪再沁、陳惠婷",
    "PublicArt_SelectTeam": "王振安、陳坤崙、許一男、方惠光、盧友義",
    "PublicArt_Desc": "設置簡化動物造型的街道傢具，為空間增加些許輕鬆的氣氛。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621162347430.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a1427f74-5ba5-44a8-a5c7-c125d561df8c",
    "PublicArt_Name": "精靈Fairy",
    "PublicArt_Author": "黃順男Huang Shun-Nan",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "精蟲精靈Sperm spirit：65x125x80cm、軟糖精靈fudge：35x60x60cm、魚精靈fish spirit：40x40x40cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "精蟲精靈：花崗石、軟糖精靈：大理石、魚精靈：花崗石",
    "PublicArt_Place": "高雄市岡山區介壽路100號 財政部台灣省國稅局南區國稅局岡山稽徵所",
    "PublicArt_Funds": "100（P125-P127，3件組）萬",
    "PublicArt_Unit": "財政部台灣省國稅局南區國稅局岡山稽徵所",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "陳冠勳、洪明宏、竇國昌、陳金星、黃春木",
    "PublicArt_SelectTeam": "陳金星、洪明宏、陳炳宏、李達皓、王武森、陳春敏",
    "PublicArt_Desc": "以創作三個精靈放置其中，嚴肅職場多了點輕鬆，觀賞者將在靈光乍現中，憶及生命最真的感動。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705194242902.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "afeb19e0-2985-4e40-a7a6-c46c05ade1c4",
    "PublicArt_Name": "海軍之心 The Heart of Navy",
    "PublicArt_Author": "曾英棟Tseng Ying-Dong",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "作品Work：800x150x100cm 基座base：45×300×300cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "作品：不鏽鋼、銅、混凝土。 基座：馬賽克、混凝土",
    "PublicArt_Place": "高雄市總營區海軍左營後勤莊敬營區 海軍左營後勤支援指揮部",
    "PublicArt_Funds": "64.87萬",
    "PublicArt_Unit": "海軍左營後勤支援指揮部",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "許一男、劉光盛、羅光志、倪瑛霞、鄒宗琳",
    "PublicArt_SelectTeam": "許一男、陳明輝、江碧芬、洪明宏、許自貴",
    "PublicArt_Desc": "將馬賽克黏貼成心型，用鮮豔的顏色及符號詮釋喜悅及動力，在新的基座上豎立揚帆，傳達自由冒險的精神",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705194354073.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a90170c6-ddef-460c-9cdf-c0ce59c9ead2",
    "PublicArt_Name": "圓融Decency",
    "PublicArt_Author": "黃順男Huang Shun-Nan",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "220x130x70cm (單位:公分)",
    "PublicArt_Type": "",
    "PublicArt_Material": "觀音石",
    "PublicArt_Place": "高雄市岡山區介壽路100號 財政部台灣省國稅局南區國稅局岡山稽徵所",
    "PublicArt_Funds": "100（P125-P127，3件組）萬",
    "PublicArt_Unit": "財政部台灣省國稅局南區國稅局岡山稽徵所",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "陳冠勳、洪明宏、竇國昌、陳金星、黃春木",
    "PublicArt_SelectTeam": "陳金星、洪明宏、陳炳宏、李達皓、王武森、陳春敏",
    "PublicArt_Desc": "國家的公僕皆學有專精，面對不同形色的民眾服務，除了依法行政，「圓融」是不可或缺的。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705194314575.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "38a998c9-7e08-466d-a687-e35d11895b0a",
    "PublicArt_Name": "刺桐花Erythrina Variegata",
    "PublicArt_Author": "蒲浩明Pu Hao-Ming",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "265x525cm",
    "PublicArt_Type": "陶瓷 - 馬賽克",
    "PublicArt_Material": "馬賽克",
    "PublicArt_Place": "高雄市鼓山區明誠三路532號 高雄市立明華國民中學",
    "PublicArt_Funds": "90（P117-P118，2件組）萬",
    "PublicArt_Unit": "高雄市立明華國民中學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "黃淑卿、許一男、黃建興、林佳禾、張克享、鄭惠丰",
    "PublicArt_SelectTeam": "黃淑卿、許一男、吳梅嵩、林佳禾、張克享",
    "PublicArt_Desc": "刺桐花是明華國中的校花，因一年四季變化明顯，故有「四季樹」之名。本幅壁畫在於表現出刺桐花的火紅意象和熱情浪漫。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705194957559.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "441bc7f6-6e8c-41c2-8829-f7314d53c871",
    "PublicArt_Name": "毅Perseverance",
    "PublicArt_Author": "洪孟佳Hong Meng-Jia",
    "PublicArt_Year": "2006",
    "PublicArt_Size": "600x120x320cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼",
    "PublicArt_Place": "高雄市小港區和平南路300號 高雄市港和國民小學",
    "PublicArt_Funds": "33萬",
    "PublicArt_Unit": "高雄市港和國民小學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "黃壬來、林右正、藍奉忠、李義雄、卓玉明、張允明、洪武宗",
    "PublicArt_SelectTeam": "陳昱銘、林右正、盧安來、蕭木川、張允明",
    "PublicArt_Desc": "本作品以向上爬伸的抽象意象，展現本校學生努力向上的精神與毅力，並以海洋圖騰顯示海洋之子不怕風浪、勇往直前的理想。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195041287.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "cfcbd8a3-0098-45d5-a505-edfb62c60f25",
    "PublicArt_Name": "珍愛生命 藝世紀",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "160*27*280cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "花崗石、不繡鋼",
    "PublicArt_Place": "高雄市左營區高雄榮民總醫院",
    "PublicArt_Funds": "640萬",
    "PublicArt_Unit": "高雄榮民總醫院",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "鄭國琪、白雅玲、張惠蘭、林平、邱茂吉、王明輝、林聰義",
    "PublicArt_SelectTeam": "黎國洪、盧明德、陳雪妮、曾媚珍、蔡瑞益、許一男、蘇志徹",
    "PublicArt_Desc": "透過自我關照，對身心靈祈福、反省，並契合高雄榮總的核心價值，提供優質健康照顧「一世人」的詮釋與剖白。重新定位E世紀(醫療世紀)的新精神與人生意義。哲學家視「愛」為人最深層的「藝術」，對待生命，愛更是綿延不斷的活水泉源。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195302976.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "10089653-5d38-4064-902b-ecd493c1b3ee",
    "PublicArt_Name": "資訊樂園 The information paradise",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "120*1720*50cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "花崗石",
    "PublicArt_Place": "高雄市楠锌區國立高雄第一科技大學",
    "PublicArt_Funds": "190.8223萬",
    "PublicArt_Unit": "國立高雄第一科技大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "歐淑慧、周肇基、林麗珠、呂惠美、張惠蘭、盧明德、高世銘",
    "PublicArt_SelectTeam": "孫榮宏、蕭宗煌、薜保瑕、盧明德、屠國威、洪明宏、李素馨",
    "PublicArt_Desc": "此作品將電腦按鍵設計成公共務外傢具，其中一個按鍵作者將他雕刻成流動體，有著ㄧ種脫序與柔軟的趣味。而平鋪於地面的黑色花崗岩石，其上顯現兩朵白雲圖案，有著輕鬆詼諧的感覺。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195220659.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7203541d-3fce-4baa-bc37-f9023494d0c9",
    "PublicArt_Name": "翱翔科技天空 Flying in the sky of technology",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "直尺雕塑：高10cm、地坪：地面10*10m2",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "鏡面黑花崗岩、鋼骨結構附上強化玻璃、照明",
    "PublicArt_Place": "高雄市楠锌區國立高雄第一科技大學",
    "PublicArt_Funds": "253.9915萬",
    "PublicArt_Unit": "國立高雄第一科技大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "歐淑慧、周肇基、林麗珠、呂惠美、張惠蘭、盧明德、高世銘",
    "PublicArt_SelectTeam": "孫榮宏、蕭宗煌、薜保瑕、盧明德、屠國威、洪明宏、李素馨",
    "PublicArt_Desc": "作品以高十尺的直尺造型與地面約10*10平方公尺鋪面組合構成。直尺給予人有規矩、精準科學的聯想，其不同方向的匯集，四方菁英雲集至此的意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195141479.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0a63f4c7-6073-4f52-a472-ce3dd73e8568",
    "PublicArt_Name": "行雲流水",
    "PublicArt_Author": "朱邦雄",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "514*310cm",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶土、洗石子",
    "PublicArt_Place": "高雄市旗山區樹人路21號",
    "PublicArt_Funds": "69.9萬",
    "PublicArt_Unit": "國立旗美高級中學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "蔡英士、翁英惠、陳繼權、曾啟川、林瓊瑜、林秀權、鄒錦娥",
    "PublicArt_SelectTeam": "蔡英士、賴新龍、張惠蘭、翁英惠、陳繼權、曾啟川、林秀權",
    "PublicArt_Desc": "借用在空中翻飛的風箏譬喻人活在生命的長河中所呈現形形色色自我EQ、IQ的要求準則，檢測是否培養到優質的人文素養！",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195811303.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7915c604-08ac-4e3a-8b48-c29af399f4c9",
    "PublicArt_Name": "聚場精神 - 印記‧生生不息‧萌蔓 Spirit of gathering field-print,brith and germination",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "印記：250*72*40cm、生生不息：300*200*80cm、萌蔓：350*130*300cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不繡鋼、水洗石、水循環動力裝置",
    "PublicArt_Place": "高雄市楠锌區和平國民小學",
    "PublicArt_Funds": "79萬",
    "PublicArt_Unit": "高雄市和平國民小學",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "鄭金治、郭文昌、李億勳、宋梅貴、王武森、趙建銘、李依憲、張真嫚、林勝童",
    "PublicArt_SelectTeam": "李億勳、黃郁生、黃任來、王武森、莊正德、趙建銘、林素研",
    "PublicArt_Desc": "本計劃以老樟樹廣場(記憶的埕)為計畫核心，並從學校校徵及色系象徵出發，融合實用機能與美感經驗，重新詮釋並延伸老樟樹廣場串聯流動的時間特性、開放空間概念及相關人文意涵。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195852904.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "6160c273-bbbc-4acd-8737-aebad2e0458d",
    "PublicArt_Name": "龍騰虎躍",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "1800*930*400cm*厚20cm",
    "PublicArt_Type": "石材 - 洗石子",
    "PublicArt_Material": "混凝土、高彩度磁磚、洗石子",
    "PublicArt_Place": "高雄市左營區海軍陸戰隊",
    "PublicArt_Funds": "53萬",
    "PublicArt_Unit": "海軍陸戰隊司令部",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "王聖權、鄭清源、王文宏、蘇成基、蘇信義、郭文昌、張弘瑜",
    "PublicArt_SelectTeam": "張清淵、蘇信義、陳聖頌、林麗華、洪郁大",
    "PublicArt_Desc": "龍、虎象徵海軍陸戰隊上山下海無所不能的戰鬥精神，在水中是靈魂的蛟龍，在陸地上是威猛的老虎。登陸艇位於兩道弧牆中作為貫穿整件作品的重要元素，登陸艇是戰鬥隊員的共同回憶，符合兩棲戰鬥的精神。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195959233.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "4cda2c9a-23f1-4b16-aad9-afb422177b83",
    "PublicArt_Name": "書香",
    "PublicArt_Author": "李光裕",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "407*52*660cm",
    "PublicArt_Type": "金屬 - 青銅",
    "PublicArt_Material": "銅",
    "PublicArt_Place": "高雄市楠梓區國立高雄大學圖書資訊大樓",
    "PublicArt_Funds": "450萬",
    "PublicArt_Unit": "國立高雄大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "黃世孟、王慶台、曾梓峰、盧友義、董大宇、林熹俊、徐忠枝、葉宗文",
    "PublicArt_SelectTeam": "王仁宏、盧明德、陳雪妮、林熺俊、黃世孟、曾梓峰、康錦樹",
    "PublicArt_Desc": "書上置傾斜咖啡杯流出甘霖，香氣四溢。書中開洞，有禪宗真空即妙有之意，實體的書中開洞意即不執著的開放心靈。「洞」賦予廣大的想像空間，在空無與實有之間，將書藉平整幾何之形，賦予感性而變化性的排列，與環境達到調和之統合。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195923266.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "95b53d23-715b-46b2-88aa-3deaff0ddc2d",
    "PublicArt_Name": "知識拼圖 Knowledge puzzle",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "A:65*300*240cm、B:90*300*45cm",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "黑色花崗石",
    "PublicArt_Place": "高雄市楠梓區國立高雄第一科技大學外語學院東側廣場",
    "PublicArt_Funds": "191.0715萬",
    "PublicArt_Unit": "國立高雄第一科技大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "歐淑慧、周肇基、林麗珠、呂惠美、張惠蘭、盧明德、高世銘",
    "PublicArt_SelectTeam": "孫榮宏、蕭宗煌、薜保瑕、盧明德、屠國威、洪明宏、李素馨",
    "PublicArt_Desc": "就像拼圖一塊塊巧妙組合的學習，在繁多的資訊學海之中，得有足夠的恆心和毅力，才能化整成知識達人的智慧，完成知識學習的拼圖。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195436215.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "6629a7b2-2035-4a79-b4b1-759582c7f097",
    "PublicArt_Name": "岡山農工快樂組曲",
    "PublicArt_Author": "戴威利",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "柱體：100*150",
    "PublicArt_Type": "玻璃 - 強化玻璃",
    "PublicArt_Material": "玻璃、馬賽克磁磚、亮彩琉璃、大理石切割片",
    "PublicArt_Place": "高雄市岡山區岡山路533號",
    "PublicArt_Funds": "70萬",
    "PublicArt_Unit": "國立岡山高級農工職業學校",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "邱明輝、廖冠祺、韓佳蓉、邱馨儀、葉耕柏、葉成喜、朱國勳",
    "PublicArt_SelectTeam": "邱明輝、黃郁生、蘇信義、韓佳蓉、蘇志徹、葉耕柏",
    "PublicArt_Desc": "作品右下類似日月圖騰隱喻本校學生日以繼夜、契而不捨的學習態度，樂府、薩克斯風的螺旋圖騰，讓觀賞者似乎隱約能聽見陣陣吹奏音符的樂章。四幅「春、夏、秋、冬」代表生生不息之意，並與主體作品稻穗圖樣所象徵以農立國之創校精神呼應。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195550193.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "84f62433-9325-4b59-8722-622850a4b920",
    "PublicArt_Name": "火眼金睛",
    "PublicArt_Author": "曾英棟",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "火眼金睛：170*66*460cm、楊桃：175*5*130cm、蕨類：750*260*60cm、秋葵：65*57*180cm、豆莢：305*60cm、芭蕉扇：107*222cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "鋼板、不繡鋼管",
    "PublicArt_Place": "高雄市小港區動植物防疫檢驗局",
    "PublicArt_Funds": "129.7萬",
    "PublicArt_Unit": "行政院農業委員會動植物防疫檢疫局",
    "PublicArt_Method": "邀請比件",
    "PublicArt_ActTeam": "葉濟蒼、劉畹芳、劉光盛、蔡獻友、蘇信義、許伯元、葛文俊",
    "PublicArt_SelectTeam": "張世揚、周伯丞、吳守哲、蔡瑞霖、薛保瑕、陳水財、李俊秀",
    "PublicArt_Desc": "檢疫所扮演進出口貨物檢驗的角色，如當年孫悟空一雙火眼金睛看透妖魔化身一般，讓病無處可逃，因而衍生火眼金睛的創意發想，突顯檢疫把關的形象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195514236.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "873763bf-f1b5-4ea2-a4f4-58dc4a6341f6",
    "PublicArt_Name": "條碼叢林 Barcode jungle",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2005",
    "PublicArt_Size": "5*1000*300cm",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "銅鐵烤漆",
    "PublicArt_Place": "高雄市楠锌區國立高雄第一科技大學",
    "PublicArt_Funds": "201.1147萬",
    "PublicArt_Unit": "國立高雄第一科技大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "歐淑慧、周肇基、林麗珠、呂惠美、張惠蘭、盧明德、高世銘",
    "PublicArt_SelectTeam": "孫榮宏、蕭宗煌、薜保瑕、盧明德、屠國威、洪明宏、李素馨",
    "PublicArt_Desc": "作者將充斥我們生活中，卻又常被忽略的條碼，放大構成一條走道。紅黑鮮明的對比，走入其中，讓人有種置身於數位虛擬世界的感受。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705195406904.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9122b552-5bea-4f18-ab0b-68a46b71e2c9",
    "PublicArt_Name": "從土地出發 Out of the Earth",
    "PublicArt_Author": "楊柏林 Yang Po-lin",
    "PublicArt_Year": "2004",
    "PublicArt_Size": "688×182×140cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼",
    "PublicArt_Place": "高雄市鼓山區美術館路80號 生態湖中",
    "PublicArt_Funds": "372.9萬",
    "PublicArt_Unit": "高雄市立美術館",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "蕭宗煌、蘇信義、楊文霓、黃才郎、魏瑛慧、郭中端、張淵舜、盧友義、蘇志勳",
    "PublicArt_SelectTeam": "林柏年、洪根深、翁英惠、陳雪妮、張文德、洪百燿、陳惠婷",
    "PublicArt_Desc": "曾經這片沼澤是海洋的遺孤，因此海洋必定是我們的母親。從生命進化猙獰的戰鬥上，我們要像鱒魚般游向出生地，重回母親的子宮——單純的宇宙。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200649802.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "b7534c15-9e37-4af3-b707-91189298c13d",
    "PublicArt_Name": "吾愛吾校 I love My Campus",
    "PublicArt_Author": "王武森 Wang Wu-Sen",
    "PublicArt_Year": "2004",
    "PublicArt_Size": "30×30cm",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶、鋼筋水泥",
    "PublicArt_Place": "高雄市左營區文府路399號 行政大樓牆上",
    "PublicArt_Funds": "136.7545(2件組)萬",
    "PublicArt_Unit": "高雄市左營區文府國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "張秋雲、翁英惠、林熹俊、張柏烟、李俊賢、王漢瑞",
    "PublicArt_SelectTeam": "張秋雲、許一男、翁英惠、林熹俊、張柏烟、潘元石、王漢瑞",
    "PublicArt_Desc": "陶板與銅浮雕組合而成LOGO造型，鑲嵌於行政大樓之高牆上，遠觀近看兩相宜，充分發揮了畫龍點睛的視覺效果，也深深地傳遞了吾愛吾校的內在價值意涵。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200308842.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "99f67e2f-eb16-41ca-85b0-3339873e492b",
    "PublicArt_Name": "徜徉自然 Wander in the Nature",
    "PublicArt_Author": "王武森 Wang Wu-Sen",
    "PublicArt_Year": "2004",
    "PublicArt_Size": "1200×950×350cm",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶、鋼筋水泥",
    "PublicArt_Place": "高雄市左營區文府路399號大門進入後林蔭步道右側",
    "PublicArt_Funds": "136.7545(2件組)萬",
    "PublicArt_Unit": "高雄市左營區文府國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "張秋雲、翁英惠、林熹俊、張柏烟、李俊賢、王漢瑞",
    "PublicArt_SelectTeam": "張秋雲、許一男、翁英惠、林熹俊、張柏烟、潘元石、王漢瑞",
    "PublicArt_Desc": "不定型結構源自兒童畫中之變形蟲，高低錯落分別散置於林蔭大道中，外面鑲嵌為師生創作的陶板，讓陶藝作品與綠色自然山景輕聲對話。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200441278.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "ac54bc7d-b6ae-4bc4-b398-2b9ee3ba01f0",
    "PublicArt_Name": "白鷺鷥 Egret",
    "PublicArt_Author": "蒲浩明 Pu Hao-Ming",
    "PublicArt_Year": "2004",
    "PublicArt_Size": "作品：135×4.5×85cm 基座：40×30×122cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼",
    "PublicArt_Place": "高雄市鼓山區明誠三路582號 南中庭北緣圖書館外側荷花池裡",
    "PublicArt_Funds": "250(3件組)萬",
    "PublicArt_Unit": "高雄市立明華國民中學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "黃淑卿、翁英惠、潘元石、張柏烟、李榮裕、黃建興、顏奇坪、鄭能雄",
    "PublicArt_SelectTeam": "黃淑卿、翁英惠、潘元石、林憲德、李榮裕、黃建興、程曉嵐、鄭能雄",
    "PublicArt_Desc": "明華國中原為農地，有白鷺鷥棲息飛翔、青蛙鳴叫，附近更有荷花池，故利用地理上特有的動植物作為公共藝術創作的題材。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200522405.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9b35660f-2bbe-41eb-ad0f-29e7adc720ef",
    "PublicArt_Name": "迎接豐收 Greet the Heavest",
    "PublicArt_Author": "陳信朗 Chen Shin-Lang",
    "PublicArt_Year": "2004",
    "PublicArt_Size": "作品：360×160×220cm（共2座）、陶板：20×10×1cm（共280面）、基座：360×160×30cm",
    "PublicArt_Type": "玻璃 - 玻璃纖維",
    "PublicArt_Material": "作品：玻璃纖維、鋼筋、混凝土、發泡樹脂，基座：陶、混凝土",
    "PublicArt_Place": "高雄市旗津區中洲二路203號",
    "PublicArt_Funds": "53.32萬",
    "PublicArt_Unit": "高雄市旗津區大汕國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "陳輝征、翁英惠、林熺俊、李俊賢、王漢瑞、黃明信、林義良",
    "PublicArt_SelectTeam": "曾媚珍、黎小容、陳雪妮、張守真、李允斐、施並璟",
    "PublicArt_Desc": "以漁民修補與整理漁網的動態表示傳承漁村的文化，啟發兒童接受教育的行為，如同漁民修補與整理魚網，都是為了未來的豐收和成長。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120622114656367.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "68437b70-2924-4859-89b5-016480214522",
    "PublicArt_Name": "蛙的變奏 The Variations of Frogs",
    "PublicArt_Author": "蒲浩明 Pu Hao-Ming",
    "PublicArt_Year": "2004",
    "PublicArt_Size": "高20、30、40cm各一件",
    "PublicArt_Type": "金屬 - 青銅",
    "PublicArt_Material": "青銅",
    "PublicArt_Place": "高雄市鼓山區明誠三路582號 南中庭北緣圖書館外側荷花池圍牆上",
    "PublicArt_Funds": "250(3件組)萬",
    "PublicArt_Unit": "高雄市立明華國民中學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "黃淑卿、翁英惠、潘元石、張柏烟、李榮裕、黃建興、顏奇坪、鄭能雄",
    "PublicArt_SelectTeam": "黃淑卿、翁英惠、潘元石、林憲德、李榮裕、黃建興、程曉嵐、鄭能雄",
    "PublicArt_Desc": "此群組作品目的在表現出一種永遠的聲音，它屬於流動與靜止。它們都在池畔，採用這種時空之姿。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200552143.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "fcefbd12-f25c-461c-9413-c0d5a6084307",
    "PublicArt_Name": "藍天綠蔭下的戶外教室 Outdoors Classroom under Blue Sky and Green Trees",
    "PublicArt_Author": "王武森 Wang Wu-Sen",
    "PublicArt_Year": "2004",
    "PublicArt_Size": "基地：700×570cm，陶椅（共40把）：31×31×33、38、42cm陶桌：60×130cm",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶、砌磚、水泥、混砂、草坪",
    "PublicArt_Place": "高雄市左營區南屏路1號 學校後方樹下",
    "PublicArt_Funds": "74.5403萬",
    "PublicArt_Unit": "高雄市左營區勝利國民小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "林英昭、黃名亨、林右正、沈欽銘、蔡東源、汪碧芬、盧友義",
    "PublicArt_SelectTeam": "林英昭、黃名亨、林右正、沈欽銘、蔡東源、汪碧芬、盧友義",
    "PublicArt_Desc": "戶外草坪上，大樹下擺放40把藝術陶椅，供師生使用，讓師生於自然環境快樂學習。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200349248.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a596a43f-31c2-4839-88c9-ad4d75e9609d",
    "PublicArt_Name": "春風 Spring Breeze",
    "PublicArt_Author": "蒲浩明 Pu Hao-Ming",
    "PublicArt_Year": "2004",
    "PublicArt_Size": "247×247×273cm",
    "PublicArt_Type": "金屬 - 青銅",
    "PublicArt_Material": "青銅",
    "PublicArt_Place": "高雄市鼓山區明誠三路582號 南中庭東南側",
    "PublicArt_Funds": "250(3件組)萬",
    "PublicArt_Unit": "高雄市立明華國民中學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "黃淑卿、翁英惠、潘元石、張柏烟、李榮裕、黃建興、顏奇坪、鄭能雄",
    "PublicArt_SelectTeam": "黃淑卿、翁英惠、潘元石、林憲德、李榮裕、黃建興、程曉嵐、鄭能雄",
    "PublicArt_Desc": "利用鏤空、穿透與平面組合的「春風」，是希望達到節省空間、隱沒空間的目的",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200031657.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "2ce41eea-f0a8-43a4-944d-a1c8d5fe9185",
    "PublicArt_Name": "光之門 Gate of the Light",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "2004",
    "PublicArt_Size": "150×500×620cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、石、RC、鋼筋混泥土、玻璃",
    "PublicArt_Place": "高雄市左營區華夏路800號 學校大門與天橋之間",
    "PublicArt_Funds": "135.755萬",
    "PublicArt_Unit": "高雄市左營區新光國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "鄭進丁、顧超光、林熺俊、張柏烟、蔡瑞益、余錦漳、劉麗美",
    "PublicArt_SelectTeam": "陳明輝、盧明德、楊文霓、李俊賢、郭小菁",
    "PublicArt_Desc": "以光為主題，藉由物理光學呈現的艷麗光鮮色彩，意旨本校學生未來光明之前程。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200147618.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0e774453-2cea-4574-acbc-d1f7202d4061",
    "PublicArt_Name": "大地樂章－『豎笛』",
    "PublicArt_Author": "陳麗杏",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "70*60*150 基座60*60*80",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "白色大理石",
    "PublicArt_Place": "高雄市81148楠梓區高雄大學路700 號",
    "PublicArt_Funds": "274(5件組,p43-p47)萬",
    "PublicArt_Unit": "國立高雄大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王仁宏、王慶台、曾梓峰、王宏舉、盧有義、鄭洲楠、葉開溫、黃文璋、李紫原、施明昌、葉宗文",
    "PublicArt_SelectTeam": "王仁宏、盧明德、陳雪妮、林熹俊、黃世孟、曾梓峰、王慶台",
    "PublicArt_Desc": "「大地樂章」是以環境和作品充分融合的主題創作，運用純熟的創作技巧將石材雕鑿出柔和悠揚的樂器線條。筆直而立的線條，配合弧度優美的曲線，昂首展現清新高亢的姿態。以藝術表現之形式，將豎笛造型予以抽象化，滿足視覺與意象的完美詮釋。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145046893.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5b3c763a-e041-451f-a702-dea9738cc7ea",
    "PublicArt_Name": "敲響未來的鐘－『星海羅盤』",
    "PublicArt_Author": "賴新龍",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "座椅a.130*41*41；b.175*41*41；c.223*41*41；d.275*41*41 筆230*65 基座直徑500",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼烤漆、水泥基座、燈泡、洗石子",
    "PublicArt_Place": "高雄市楠梓區藍昌路416號 高雄市立楠梓高級中學",
    "PublicArt_Funds": "180(含P42)萬",
    "PublicArt_Unit": "高雄市立楠梓高級中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "莊老賜、吳守哲、蕭宗煌、彭振聲、李俊賢、林上又、陳武雄",
    "PublicArt_SelectTeam": "呂清夫、劉振洲、陳水財、李俊賢、趙建銘、陳雪妮、王哲雄、鄭進丁",
    "PublicArt_Desc": "以一個流行的術語作為創作的構想，表達出時間的擺動，創造人們成長的過程，並且以時間的脈絡尋求更高層的更新，所以在成長過程中尋找自己的位子，並且邁向更高更炫麗的人生色彩。而夢想就在那一枝筆堅定的敘述自己的未來。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145855735.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145856715.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "b24596d6-449d-460f-a63d-e30622e7bfa1",
    "PublicArt_Name": "大地樂章－『法國號』",
    "PublicArt_Author": "姜憲明",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "120*65*105 基座60*60*120",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "奧羅拉大理石",
    "PublicArt_Place": "高雄市81148楠梓區高雄大學路700 號",
    "PublicArt_Funds": "274(5件組,p43-p47)萬",
    "PublicArt_Unit": "國立高雄大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王仁宏、王慶台、曾梓峰、王宏舉、盧有義、鄭洲楠、葉開溫、黃文璋、李紫原、施明昌、葉宗文",
    "PublicArt_SelectTeam": "王仁宏、盧明德、陳雪妮、林熹俊、黃世孟、曾梓峰、王慶台",
    "PublicArt_Desc": "圓潤飽滿的扭轉型體凝聚的渾厚能量，以內斂的情緒反射即將釋放的張力。同時，在穿透與圓滿的造型中，經由扭轉與變形，使作品更趨成熟。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145126848.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "da071ed4-1895-4a48-b84a-f3369a0abd1e",
    "PublicArt_Name": "運行",
    "PublicArt_Author": "黃裕智",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "直徑160-320",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不繡鋼線",
    "PublicArt_Place": "高雄市楠梓區興楠路182號 台灣高雄少年法院",
    "PublicArt_Funds": "300(含大地生機)萬",
    "PublicArt_Unit": "台灣高雄少年法院",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "莊秋桃、李進雄、趙首智、黃培宜、楊文霓、李俊賢、羅仲廷",
    "PublicArt_SelectTeam": "莊秋桃、莊輝煌、羅仲廷、楊文霓、李俊賢、陳箐、楊景行",
    "PublicArt_Desc": "作品設置於高處，觀者需藉由移動視點來關注作品，一如凝視宇宙萬象生生不息的運轉，提示著人應順應自然節奏前行。金屬材質則巧妙運作天光，凝聚、反射，為整棟建築創造了波光粼粼的美學異象。 作品以不鏽鋼線編織而成，細膩精緻的結構，也正契合台灣高雄少年法院處心積慮為青少年編織的一張張保護網",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200718256.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "41695ff5-1b1e-45c3-b48c-ff3add8db6d8",
    "PublicArt_Name": "大地生機",
    "PublicArt_Author": "姜憲明",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "a.230*110*150 b.100*60*55 c.280*120*145 d.130*90*210 e.120*55*100",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "大理石",
    "PublicArt_Place": "高雄市楠梓區興楠路182號 台灣高雄少年法院",
    "PublicArt_Funds": "300(含運行)萬",
    "PublicArt_Unit": "台灣高雄少年法院",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "莊秋桃、李進雄、趙首智、黃培宜、楊文霓、李俊賢、羅仲廷",
    "PublicArt_SelectTeam": "莊秋桃、莊輝煌、羅仲廷、楊文霓、李俊賢、陳箐、楊景行",
    "PublicArt_Desc": "「大地生機」以五種造型，既像是彼此對話的動物、也如凝定穩重的山岳，為進入法院的人員─特別是青少年─平息了緊張與焦躁，與充滿「家／庇護」意向的主建築相呼應，具象體現台灣高雄少年法院極力成就的精神：以保護代替監禁，以教育代替處罰。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200824026.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "4bcbaff5-bc31-43d6-aab7-016a4ea5a0fb",
    "PublicArt_Name": "圓融五行",
    "PublicArt_Author": "邱裕盛",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "作品：150*150*215、基座：直徑150*高40、草皮地：直徑1100",
    "PublicArt_Type": "金屬 - 鐵件結構",
    "PublicArt_Material": "銅 、鐵烤漆、鋼",
    "PublicArt_Place": "高雄市三民區鼎山街445號 高雄市鼎金國民中學活動中心",
    "PublicArt_Funds": "59.973萬",
    "PublicArt_Unit": "高雄市立鼎金國民中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "魏文瑞、徐朝英、黃淑滿、傅清海、張柏煙、王慶立、朱輝章",
    "PublicArt_SelectTeam": "翁英惠、林熹俊、汪碧芬、魏文瑞、黃淑滿",
    "PublicArt_Desc": "此件作品，以五塊連接成高塔及五線人形線的結合成為完整的題材，各塊以正方形的不同特殊造型，呈現不同的色彩及意義。在視覺空間上有「腦部、眼部、耳部、口部、鼻部」的特殊圖案，象徵「智慧、慧眼、耳聰、口才、敏銳」。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705200938558.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "f6093454-b0d1-41f1-99e5-389e1c61e659",
    "PublicArt_Name": "大地樂章－『旋律』",
    "PublicArt_Author": "江龍",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "3250*3240",
    "PublicArt_Type": "石材 - 洗石子",
    "PublicArt_Material": "洗石子、卵石、植草磚、高壓水泥磚",
    "PublicArt_Place": "高雄市81148楠梓區高雄大學路700 號",
    "PublicArt_Funds": "274(5件組,p43-p47)萬",
    "PublicArt_Unit": "國立高雄大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王仁宏、王慶台、曾梓峰、王宏舉、盧有義、鄭洲楠、葉開溫、黃文璋、李紫原、施明昌、葉宗文",
    "PublicArt_SelectTeam": "王仁宏、盧明德、陳雪妮、林熹俊、黃世孟、曾梓峰、王慶台",
    "PublicArt_Desc": "曲線造型的線條設計，將地坪以樂譜的形式，串連在四件作品之間，一如輕快悠揚的交響樂。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120719120027781.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "acd268f8-6f36-4c37-b85a-8318db47e9ec",
    "PublicArt_Name": "大地樂章－『豎琴』",
    "PublicArt_Author": "陳麗杏",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "90*75*135 基座60 *60*80",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "奧羅拉大理石",
    "PublicArt_Place": "高雄市81148楠梓區高雄大學路700 號",
    "PublicArt_Funds": "274(5件組,p43-p47)萬",
    "PublicArt_Unit": "國立高雄大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王仁宏、王慶台、曾梓峰、王宏舉、盧有義、鄭洲楠、葉開溫、黃文璋、李紫原、施明昌、葉宗文",
    "PublicArt_SelectTeam": "王仁宏、盧明德、陳雪妮、林熹俊、黃世孟、曾梓峰、王慶台",
    "PublicArt_Desc": "以三角視點為考量，在直線和曲線的拉距間，變化出空間流動的氛圍。配合著無限的琴絲，展現旋律漫漫穿揚於樂器中。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145012597.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "0cfd79a5-17e2-4ff8-b7e6-687bdc030ef4",
    "PublicArt_Name": "大地樂章－『曼陀玲』",
    "PublicArt_Author": "姜憲明",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "115*68*45 基座60*60*120",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "白色大理石",
    "PublicArt_Place": "高雄市81148楠梓區高雄大學路700 號",
    "PublicArt_Funds": "274(5件組,p43-p47)萬",
    "PublicArt_Unit": "國立高雄大學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "王仁宏、王慶台、曾梓峰、王宏舉、盧有義、鄭洲楠、葉開溫、黃文璋、李紫原、施明昌、葉宗文",
    "PublicArt_SelectTeam": "王仁宏、盧明德、陳雪妮、林熹俊、黃世孟、曾梓峰、王慶台",
    "PublicArt_Desc": "以穿孔及線條美感，將樂器曼陀玲的形及聲音，運用抽象雕鑿方式，藉由不同的視角，傳遞作品內蘊的意涵。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621144927711.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "63d17dc0-e513-4579-9781-5ecd9e768d34",
    "PublicArt_Name": "敲響未來的鐘－『流變潛力』",
    "PublicArt_Author": "賴新龍",
    "PublicArt_Year": "2003",
    "PublicArt_Size": "a.不鏽鋼板300*150分針150座椅45*45*45燈60*20*20\r\nb.不鏽鋼板300*120時針50座椅45*45*45燈60*20*20",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼烤漆、投射燈、創作時鐘、強化玻璃",
    "PublicArt_Place": "高雄市楠梓區藍昌路416號 高雄市立楠梓高級中學",
    "PublicArt_Funds": "180(含P41)萬",
    "PublicArt_Unit": "高雄市立楠梓高級中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "莊老賜、吳守哲、蕭宗煌、彭振聲、李俊賢、林上又、陳武雄",
    "PublicArt_SelectTeam": "呂清夫、劉振洲、陳水財、李俊賢、趙建銘、陳雪妮、王哲雄、鄭進丁",
    "PublicArt_Desc": "以色彩的流下為視覺焦點，以時間的經緯作標準，成為一個揮灑的天地，兩側的支撐座椅正提醒你時間的變化，別忘了揮灑自己的色彩。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145931110.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145930625.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621145930943.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8fbbdb05-bc75-4402-a29e-47559dcb6ff9",
    "PublicArt_Name": "百年樹人",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "480公分×160公分×47公分 (單位:公分)",
    "PublicArt_Type": "其他 - 木材",
    "PublicArt_Material": "木、石",
    "PublicArt_Place": "高雄市前鎮區沱江路200號 高雄市立民權國民小學操場旁",
    "PublicArt_Funds": "314（含《金魚不見了》、《悠游》、《牧》）萬",
    "PublicArt_Unit": "高雄市立民權國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、盧明德、黃壬來、洪金耀、林素妍、洪玉賜、何達雄、\r\n林曉堂、劉秋平",
    "PublicArt_SelectTeam": "林熹俊、顧超光、蔡瑞藝、施並璟、汪碧芬、盧友義",
    "PublicArt_Desc": "教育是百年大計，從小灌溉，札根成長，以書本為造型，打開平鋪在地上，樹木從中長出，恰似教育一般，學子在老師諄追教誨下學習成長，方能成為棟樑之材，不但是座椅，也可當成講台，學童站在其上，便可期許自己是一本活的書，激發榮譽感。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202645525.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "17aaeffe-fd92-4c7d-9bcc-518cba8117fc",
    "PublicArt_Name": "飛舞人生",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "300公分×100公分×200公分",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼彎桿",
    "PublicArt_Place": "高雄市左營區海功路55號 高雄市立左營高級中學藝能館前",
    "PublicArt_Funds": "155（含《羽化》）萬",
    "PublicArt_Unit": "高雄市立左營高級中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "吳榮瑞、周忠信、黃豐珍、劉永元、吳守哲、賴新龍、廖隆基",
    "PublicArt_SelectTeam": "翁英惠、盧明德、張守真、林熹俊、許一男、楊文霓、陳雪妮",
    "PublicArt_Desc": "左營高中舞蹈資優班表現傑出，作者以破繭而出的兩組蝴蝶造型，象徵學生在學校接受老師的教誨，與同學彼此惕勵學習，踏出校園之後，人人表現出類拔萃，服務人群，開展如彩蝶般多姿多彩的願景，宛若羽化飛舞的美麗人生。與《羽化》一作相對設立，讓觀者亦能融入其間，形成充滿學習、教育精髓的場域。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202612148.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8d0adfec-b7b7-4324-8dd1-83d64e7fec1b",
    "PublicArt_Name": "空間游移",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "1500公分×420公分×10公分",
    "PublicArt_Type": "金屬 - 鐵鋁合金",
    "PublicArt_Material": "鐵鋁合金、宜蘭石鋪面",
    "PublicArt_Place": "高雄市左營區重愛路99號 高雄市立福山國民小學階梯看台區",
    "PublicArt_Funds": "295（含《水的意象》、《人文與自然的承載》）萬",
    "PublicArt_Unit": "高雄市政府工務局新建工程處",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "李政雄、林建宏、吳宗哲、李義雄、韋淑美、郭小菁、翁英惠",
    "PublicArt_SelectTeam": "陳雪妮、高秀蓮、李俊賢",
    "PublicArt_Desc": "人類不斷思索人與環境的關係，不只是「人與宇宙的關係」及「人與天、地間的關係」，更細緻到人死與周遭環境任何一種生命體。集結游移的魚群組構成帶狀流動，它直接聯想到自然與環境的意義。在文學上，魚代表生命與豐腴的轉換，在空間中游移的魚群，不只是現實環境的另類想像，更滿足人類環境社會對某種自然環境的懷念。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201357427.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "f5159685-4918-4bd0-8712-845b0a8f8b8b",
    "PublicArt_Name": "世界給你，你給世界─您好Ⅱ",
    "PublicArt_Author": "田邊武",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "200公分×160公分、190公分×110公分",
    "PublicArt_Type": "金屬 - 鐵鋁合金",
    "PublicArt_Material": "鋁合金鋼、霓虹燈",
    "PublicArt_Place": "高雄市左營區民族路853號 台灣南區郵政管理局高雄郵件處理中心電梯廳牆面",
    "PublicArt_Funds": "660（含《Mail》、《彩虹橋》、《您好Ⅰ》）萬",
    "PublicArt_Unit": "台灣南區郵政管理局高雄郵件處理中心",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林勝雄、蔡明山、曾媚珍、陳水財、張國松、陳伯勳、劉信雄、陳柳川",
    "PublicArt_SelectTeam": "吳玉成、邱博舜、翁英惠、陳雪妮、潘元石、賴新龍",
    "PublicArt_Desc": "郵票圖形加註「您好」的問候語，主要在表現郵票連繫了世界各地的人們，評審建議「您好」改為「世界給你，你給世界」，以各國不同語言標明問候語──您好，形成更豐富的意象。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201450407.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "d4e337cf-4d0a-490a-9d75-8602e811087f",
    "PublicArt_Name": "雲橋",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "200公分×1200公分×10公分",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼板切焊塗裝",
    "PublicArt_Place": "高雄市旗津區中州三路482號 國立高雄海洋技術學院旗津校區教學綜合實習大樓三四樓橫向天橋下",
    "PublicArt_Funds": "289（含《海洋精靈》、《風帆》）萬",
    "PublicArt_Unit": "國立高雄海洋技術學院",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "鄭利榮、洪根深、李允斐、廖隆基、楊國台、莊正德",
    "PublicArt_SelectTeam": "許一男、賴新龍、莊正德、李俊賢、陳宗來、白雅玲、潘元石、蘇志徹",
    "PublicArt_Desc": "位處三、四樓的鋼構橋串聯左右兩棟大樓，方便所有師生往來，利用鋼構的空間，設置直片式雲狀圖形，雲狀圖形的兩側用不同的色彩圖裝，燈具隱於上方，上下透空的空間，無礙光線投射或維修。雲的色彩隨視覺角度不同而改變，雲代表大自然氣息的循環，生命的主要元素「水」受陽光加溫成水氣，產生向上的力量，能滋潤大地。不同型態的雲代表不同狀況的天候，雲在詩情畫意背後，有著相當嚴肅的訊息與任務。（圖片提供／許禮憲）",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201646368.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "88a11717-7a61-48a6-a6ca-82043b72905b",
    "PublicArt_Name": "牧",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "110公分×40公分×40公分×12組",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "黑、白大理石",
    "PublicArt_Place": "高雄市前鎮區沱江路200號 高雄市立民權國民小學中庭",
    "PublicArt_Funds": "314（含《金魚不見了》、《悠游》、 《百年樹人》）萬",
    "PublicArt_Unit": "高雄市民權國小",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、盧明德、黃壬來、洪金耀、林素妍、洪玉賜、何達雄、林曉堂、劉秋平",
    "PublicArt_SelectTeam": "林熹俊、顧超光、蔡瑞藝、施並璟、汪碧芬、盧友義",
    "PublicArt_Desc": "大理石黑白鑲嵌，一組有十二件，大小不等，造型圓渾，宛若一群牛兒在草地上吃草，發揮寓教於樂的效用，提高同學的學習興緻，增進民眾與學校的互動。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201206881.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "64f76907-5e89-483f-9a30-80023454c598",
    "PublicArt_Name": "世界給你，你給世界─您好Ⅰ",
    "PublicArt_Author": "田邊武",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "215公分×254公分",
    "PublicArt_Type": "金屬 - 鐵鋁合金",
    "PublicArt_Material": "鋁合金鋼、霓虹燈",
    "PublicArt_Place": "高雄市左營區民族路853號 台灣南區郵政管理局 高雄郵件處理中心電梯廳牆面",
    "PublicArt_Funds": "660（含《Mail》、《彩虹橋》、《您好Ⅱ》）萬",
    "PublicArt_Unit": "台灣南區郵政管理局高雄郵件處理中心",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林勝雄、蔡明山、曾媚珍、陳水財、張國松、陳伯勳、劉信雄、陳柳川",
    "PublicArt_SelectTeam": "吳玉成、邱博舜、翁英惠、陳雪妮、潘元石、賴新龍",
    "PublicArt_Desc": "郵票圖形加註「您好」的問候語，主要在表現郵票連繫了世界各地的人們，評審建議「您好」改為「世界給你，你給世界」。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201248199.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7afd94c8-a9d8-43f6-812c-76c1006f92e4",
    "PublicArt_Name": "海洋精靈",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "150公分×130公分×70公分 150公分×150公分×70公分",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "灰白黑紋大理石、黑色花崗石",
    "PublicArt_Place": "高雄市旗津區中州三路482號 國立高雄海洋技術學院旗津校區 教學綜合實習大樓入口左側",
    "PublicArt_Funds": "289（含《雲橋》、《風帆》）萬",
    "PublicArt_Unit": "國立高雄海洋技術學院",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "鄭利榮、洪根深、李允斐、廖隆基、楊國台、莊正德",
    "PublicArt_SelectTeam": "許一男、賴新龍、莊正德、李俊賢、陳宗來、白雅玲、潘元石、蘇志徹",
    "PublicArt_Desc": "海豚與虎鯨是海洋中智慧最高的動物，充滿活力又高度合群，非常有靈性，契合大家對下一代的期望，在學校綜合實習大樓入口，設置一組以海豚與虎鯨為主題的石雕，代表教育的目標是培養學生合群、智慧與活力，未來能自在融入國際社會中。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172901074.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172901276.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a9f7b398-67cb-4414-b092-39eeb759bb13",
    "PublicArt_Name": "入口藝術與學習文化結合",
    "PublicArt_Author": "翁德修",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "540公分×270公分×34公分×12組",
    "PublicArt_Type": "玻璃 - 強化玻璃",
    "PublicArt_Material": "木心板、橡木皮、櫻桃木美耐板、強化清玻璃、鎖具",
    "PublicArt_Place": "高雄市左營區重愛路99號 高雄市立福山國民小學第三期校舍一樓川堂兩側",
    "PublicArt_Funds": "20萬",
    "PublicArt_Unit": "高雄市立福山國小學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "李政雄、林建宏、吳宗哲、李義雄、韋淑美、郭小菁、翁英惠",
    "PublicArt_SelectTeam": "陳雪妮、高秀蓮、李俊賢",
    "PublicArt_Desc": "為有效拉近空間、校舍建築體、景觀與入口意象的銜接，拉近觀眾與學校學習文化的關係與互動，採戶外傢俱型態，有效軟化學校入口剛硬的印象，減輕大型浮雕過重過剛的意象，發揮質感與造型效果，有效發揮開放教育的學習文化，提供學校開放展示學習、教學及藝術競賽等成果，結合師生共同創作的陶藝作品，鑲嵌植入設置完成。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201950227.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "f84db688-3ab0-47f9-b623-3b94ecec69a2",
    "PublicArt_Name": "悠游",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "500公分×220公分×300公分 (單位:公分)",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "花蓮白色大理石",
    "PublicArt_Place": "高雄市前鎮區沱江路200號 高雄市立民權國民小學入口左側庭園",
    "PublicArt_Funds": "314（含《金魚不見了》、《百年樹人》、《牧》萬",
    "PublicArt_Unit": "高雄市立民權國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、盧明德、黃壬來、洪金耀、林素妍、洪玉賜、何達雄、林曉堂、劉秋平",
    "PublicArt_SelectTeam": "林火喜俊、顧超光、蔡瑞藝、施並璟、汪碧芬、盧友義",
    "PublicArt_Desc": "作品設置在親水區，以魚為題材，以石板刻成，中間鏤空，造型簡化，線條柔軟，試圖展現魚兒悠然自得。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202022387.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "f1dc42df-75af-4cd5-92ec-42ed50f0689b",
    "PublicArt_Name": "讀書樂",
    "PublicArt_Author": "余燈銓／臻品藝術文化有限公司",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "趴姿男孩︰98公分×35公分×37公分 坐姿男孩︰52公分×46公分×38公分",
    "PublicArt_Type": "金屬 - 青銅",
    "PublicArt_Material": "青銅",
    "PublicArt_Place": "高雄市苓雅區凱旋二路89號 國立高雄師範大學附屬高級中學 綜合大樓川堂入口左側平台",
    "PublicArt_Funds": "144(p89-90)萬",
    "PublicArt_Unit": "國立高雄師範大學附屬高級中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "蔡崇名、薛松村、蘇郁雯、鄭洲楠、陳雪妮、鄭進丁、吳守哲、陳瑞文、翁英惠",
    "PublicArt_SelectTeam": "蔡崇名、薛松村、蘇郁雯、陳水財、李榮裕、潘元石",
    "PublicArt_Desc": "或趴或坐的閱讀神態自在無拘，沒有城市的喧囂與緊湊，讓觀者心中產生悠閒與寧靜的讀書樂趣，同學間互相陪伴讀書的溫暖，讓讀書成為輕鬆愉悅的樂趣，為校園營造溫馨的讀書氛圍。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172143445.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172143386.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "802d8e80-7c2c-482d-9576-2471dfb53cbd",
    "PublicArt_Name": "人與自然的承載體",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "1500公分×550公分×250公分",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "石材、銅、不鏽鋼、鐵、枕木、宜蘭石鋪",
    "PublicArt_Place": "高雄市左營區重愛路99號 高雄市立福山國民小學戶外教學區",
    "PublicArt_Funds": "295（含《空間游移》、《水的意象》）萬",
    "PublicArt_Unit": "高雄市立福山國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "李政雄、林建宏、吳宗哲、李義雄、韋淑美、郭小菁、翁英惠",
    "PublicArt_SelectTeam": "陳雪妮、高秀蓮、李俊賢",
    "PublicArt_Desc": "福山國小位處左營古城附近，臨近蓮池潭，本有半屏山，山山有鐵道經過，結合山水、古城、樓牆、鐵道與埤池等造型圖象融匯在一艘行駛的巨船中、滿載希望、文化與歷史的傳承。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202103221.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "1fdc9f16-998b-4f52-9915-0e260b41571e",
    "PublicArt_Name": "現代里程碑Ⅰ",
    "PublicArt_Author": "王武森 ／ 采青藝術有限公司",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "600公分×500公分×350公分",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶",
    "PublicArt_Place": "高雄市左營區南屏路1號 高雄市立勝利國民小學",
    "PublicArt_Funds": "130（含《現代里程碑Ⅱ》、《現代里程碑Ⅲ》）萬",
    "PublicArt_Unit": "高雄市立勝利國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林右正、林英昭、沈欽銘、汪碧芬、陳輝征、蔡東源、盧友義",
    "PublicArt_SelectTeam": "林熹俊、陳瑞文、楊欽富、顧超光",
    "PublicArt_Desc": "大小不同陶雕組合而成，富有強烈童稚趣味，色彩活潑且生動，作品可坐也可休憩，大型陶雕內部砌磚、水泥、泥砂為內部結構，外面鑲嵌一體成型手捏的小陶塑。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202509572.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "043f7010-4008-4997-91c2-14643f532090",
    "PublicArt_Name": "水的意象",
    "PublicArt_Author": "陳明輝",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "350公分×350公分×450公分",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "石材、銅、不鏽鋼、宜蘭石鋪面",
    "PublicArt_Place": "高雄市左營區重信路與自由路街角 高雄市立福山國民小學地下停車場入口",
    "PublicArt_Funds": "295（含《空間游移》、《人文與自然的承載》）萬",
    "PublicArt_Unit": "高雄市立福山國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "李政雄、林建宏、吳宗哲、李義雄、韋淑美、郭小菁、翁英惠",
    "PublicArt_SelectTeam": "陳雪妮、高秀蓮、李俊賢",
    "PublicArt_Desc": "取材福山國小現址根源於水的文化意涵，藉由木材、菱角、水紋、水草、貝殼、岩石等生命元素，經過比例、幾何、測量、雕刻、鑄造等手法、轉化成具現代性的藝術造型語彙、呈現出人文歷史情境與自然環境的依存關係、水孕育出生命與文化、是人類最初的母床。打破單件獨立雕塑品鑿造型與巨大意義的地標形式，運用可親近、可學習、可接觸、多元活潑與寓教於樂的複合雕塑園區。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202413813.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5290cd70-c533-4681-a56d-1c27665f0bad",
    "PublicArt_Name": "現代里程碑Ⅱ",
    "PublicArt_Author": "王武森／采青藝術有限公司",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "330公分×100公分直徑×4組",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶",
    "PublicArt_Place": "高雄市左營區南屏路1號 高雄市立勝利國民小學一樓大廳",
    "PublicArt_Funds": "130（含《現代里程碑Ⅰ》、《現代里程碑Ⅲ》）萬",
    "PublicArt_Unit": "高雄市立勝利國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林右正、林英昭、沈欽銘、汪碧芬、陳輝征、蔡東源、盧友義",
    "PublicArt_SelectTeam": "林熹俊、陳瑞文、楊欽富、顧超光",
    "PublicArt_Desc": "類似浮雕的小陶塊組合鑲嵌在四根圓柱上，以流暢線條與幾何形式表現，陶板以圓腳收邊，不會形成危險。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202445824.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "45465887-ac18-4b25-9a37-ff7eb792a796",
    "PublicArt_Name": "羽化",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "100公分×100公分×150公分",
    "PublicArt_Type": "石材 - 大理石",
    "PublicArt_Material": "大理石",
    "PublicArt_Place": "高雄市左營區海功路55號 高雄市立左營高級中學藝能館大廳",
    "PublicArt_Funds": "155（含《飛舞人生》）萬",
    "PublicArt_Unit": "高雄市立左營高級中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "吳榮瑞、周忠信、黃豐珍、劉永元、吳守哲、賴新龍、廖隆基",
    "PublicArt_SelectTeam": "翁英惠、盧明德、張守真、林熹俊、許一男、楊文霓、陳雪妮",
    "PublicArt_Desc": "左營高中舞蹈資優班表現傑出，作者以破繭而出的兩組蝴蝶造型，象徵學生在學校接受老師的教誨，與同學彼此惕勵學習，踏出校園之後，人人表現出類拔萃，服務人群，開展如彩蝶般多姿多彩的願景，宛若羽化飛舞的美麗人生。與《飛舞人生》一作相對設立，讓觀者亦能融入其間，形成充滿學習、教育精髓的場域。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202921181.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "5f356a67-7fb8-434e-81d6-ee6ad0e7331b",
    "PublicArt_Name": "風帆",
    "PublicArt_Author": "許禮憲",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "270公分×300公分×100公分",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "花崗石、不鏽鋼",
    "PublicArt_Place": "高雄市旗津區中州三路482號 國立高雄海洋技術學院旗津校區 教學綜合實習大樓中庭末端樓梯前",
    "PublicArt_Funds": "289（含《海洋精靈》、《雲橋》）萬",
    "PublicArt_Unit": "國立高雄海洋技術學院",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "鄭利榮、洪根深、李允斐、廖隆基、楊國台、莊正德",
    "PublicArt_SelectTeam": "許一男、賴新龍、莊正德、李俊賢、陳宗來、白雅玲、潘元石、蘇志徹",
    "PublicArt_Desc": "帆船與風是人類利用大自然力量的完美典範，在過度開發的今日，應以永續利用循環再生的出發點，來利用自然資源，而非損害環境，船過水無痕是原始且終極的目標，也是現代化時代不該輕忽的重要課題。（圖片提供／許禮憲）",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202900635.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "b99401c8-fbd9-4bb1-ba87-f91d1ab91176",
    "PublicArt_Name": "於天地的恩賜之中—包",
    "PublicArt_Author": "田邊武",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "110公分×110公分×50公分",
    "PublicArt_Type": "其他 - 木材",
    "PublicArt_Material": "木、石",
    "PublicArt_Place": "高雄市美濃區民族路49-3號 高雄縣美濃客家文物館前廣場",
    "PublicArt_Funds": "650 (含《伸》及《水文》)萬",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "倪再沁、黃步青、盧明德、賴新龍、郭瑞坤、黃燭吉、謝英俊",
    "PublicArt_SelectTeam": "楊文霓、李允斐、謝英俊、賴新龍、郭瑞坤、張新丕",
    "PublicArt_Desc": "包》是榕樹樹枝中央放設自然石，樹枝猶如從石頭中延伸而出。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202821448.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "4fc812bf-3b61-4cd4-b526-ea044cf43902",
    "PublicArt_Name": "金魚不見了",
    "PublicArt_Author": "黃清輝",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "800公分×10公分×250公分",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、彩繪",
    "PublicArt_Place": "高雄市前鎮區沱江路200號 高雄市立民權國民小學四樓",
    "PublicArt_Funds": "314 （含《牧》、《悠游》、《百年樹人》）萬",
    "PublicArt_Unit": "高雄市立民權國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "翁英惠、盧明德、黃壬來、洪金耀、林素妍、洪玉賜、何達雄、林曉堂、劉秋平",
    "PublicArt_SelectTeam": "林熹俊、顧超光、蔡瑞藝、施並璟、汪碧芬、盧友義",
    "PublicArt_Desc": "結合兒童教學的公共藝術，牆上兩個金魚缸與六對不同表情及造形的眼睛，小朋友可以發揮不同的想像力，製作出一件件美勞作品或按圖索驥編故事內容，也讓牆面增添活潑氣氛。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202713854.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "94878ea2-b23c-4fc3-9a75-dcc5f06578ea",
    "PublicArt_Name": "於天地的恩賜之中—水文",
    "PublicArt_Author": "田邊武",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "110公分×60公分×40公分×12組",
    "PublicArt_Type": "其他 - 木材",
    "PublicArt_Material": "木、石",
    "PublicArt_Place": "高雄市美濃區民族路49-3號 高雄市美濃客家文物館中庭與二樓露台",
    "PublicArt_Funds": "650(含《伸》及《包》)萬",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "倪再沁、黃步青、盧明德、賴新龍、郭瑞坤、黃燭吉、謝英俊",
    "PublicArt_SelectTeam": "楊文霓、李允斐、謝英俊、賴新龍、郭瑞坤、張新丕",
    "PublicArt_Desc": "《水文》一作由十二件景觀石擺設在廣場、中庭、二樓及迴廊等處，表面處理成波浪紋，代表山與山之間有水流動，河流是大自然帶給人們最大的恩賜之一，水不但淨化人心，也帶給大地富庶之生機。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705202752284.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "de2fac28-b818-4581-9984-d1ea242717c9",
    "PublicArt_Name": "世界給你，你給世界─彩虹橋",
    "PublicArt_Author": "田邊武",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "270公分×390公分×500-700公分",
    "PublicArt_Type": "",
    "PublicArt_Material": "金屬管(鈦合金)、探照管",
    "PublicArt_Place": "高雄市左營區民族路853號 台灣南區郵政管理局高雄郵件處理中心廣場",
    "PublicArt_Funds": "660含《Mail》、《您好I》、《您好II》）萬",
    "PublicArt_Unit": "台灣南區郵政管理局高雄郵件處理中心",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林勝雄、蔡明山、曾媚珍、陳水財、張國松、陳伯勳、劉信雄、陳柳川",
    "PublicArt_SelectTeam": "吳玉成、邱博舜、翁英惠、陳雪妮、潘元石、賴新龍",
    "PublicArt_Desc": "彩虹橋代表溝通、調解與仲介之義，郵政網路系統遍及各地，透過信函的溝通，給予人們溫馨的感覺，希望更多人與人的關係能夠增添色彩，彩虹橋代表的是郵政與人的關係。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201614908.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "18d7b6b8-4cbb-470f-8c71-d0b61abf6541",
    "PublicArt_Name": "心之泉",
    "PublicArt_Author": "楊奉琛",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "115公分×220公分×52公分",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、環保玻璃",
    "PublicArt_Place": "高雄市左營區大順一路100號 高雄市立新上國民小學",
    "PublicArt_Funds": "65萬",
    "PublicArt_Unit": "高雄市立新上國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "張基成、趙智偉、曾媚珍、翁英惠、白雅玲、蘇信義、王漢瑞",
    "PublicArt_SelectTeam": "張基成、楊文霓、洪百耀、陳豔淑、鍾雯琪",
    "PublicArt_Desc": "新上國小位於高樓林立的愛河邊，愛河代表的就是水，鼓字類似「川」，以水的古字發展出整體造型，並以錯位方式日各視點出發都可看出如「川」的「水」，設置地點正是校區的親水區，以水的意象為緣起，形塑生活藝術親水的空間。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201828775.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a60d8a46-3766-4aa4-8037-cb4cabd307fa",
    "PublicArt_Name": "世界給你，你給世界─Mail",
    "PublicArt_Author": "田邊武",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "主體︰600公分×180公分×100公分 基座︰660公分× 25公分×120公分",
    "PublicArt_Type": "",
    "PublicArt_Material": "高張力鋼",
    "PublicArt_Place": "高雄市左營區民族一路853號 台灣南區郵政管理局高雄郵件處理中心入口左側",
    "PublicArt_Funds": "660（含《彩虹橋》、《您好I》、《您好 II》）萬",
    "PublicArt_Unit": "台灣南區郵政管理局高雄郵件處理中心",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林勝雄、蔡明山、曾媚珍、陳水財、張國松、陳伯勳、劉信雄、陳柳川",
    "PublicArt_SelectTeam": "吳玉成、邱博舜、翁英惠、陳雪妮、潘元石、賴新龍",
    "PublicArt_Desc": "高雄郵件處理中心是處理郵件的場所，此作用文字幾何表現，Mail凸顯郵件處理中心的特色，信件是繞著地球跑，M用大寫，M之中的V採用錐形，A用小寫a，下方圓形代表地球，I用小寫i，上方一點用三角錐形。L用大寫，讓作品搭配整體建物使用之特色。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201915555.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "4cad82f6-81b9-46c7-9fa2-aab52eacf972",
    "PublicArt_Name": "於天地的恩賜之中—伸",
    "PublicArt_Author": "田邊武",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "300公分×280公分×80公分",
    "PublicArt_Type": "其他 - 木材",
    "PublicArt_Material": "木、石",
    "PublicArt_Place": "高雄市美濃區民族路49-3號 高雄市美濃客家文物館前廣場",
    "PublicArt_Funds": "650(含《包》及《水文》)萬",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "倪再沁、黃步青、盧明德、賴新龍、郭瑞坤、黃燭吉、謝英俊",
    "PublicArt_SelectTeam": "楊文霓、李允斐、謝英俊、賴新龍、郭瑞坤、張新丕",
    "PublicArt_Desc": "《伸》是大型景觀石中間挖出個圓洞，榕樹植於其中，石頭代表對大自然敬畏之意。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201107643.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "3ea51aa7-f308-4255-bf2b-c0ff406b91a2",
    "PublicArt_Name": "晨曦",
    "PublicArt_Author": "余燈銓／臻品藝術文化有限公司",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "女孩︰167公分×64公分×182公分 基座︰ 58公分×64公分× 29公分",
    "PublicArt_Type": "金屬 - 青銅",
    "PublicArt_Material": "青銅",
    "PublicArt_Place": "高雄市苓雅區凱旋二路89號 國立高雄師範大學附屬高級中學綜合大樓正面一樓川堂入口右側平台",
    "PublicArt_Funds": "144(p89-90)萬",
    "PublicArt_Unit": "國立高雄師範大學附屬高級中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "蔡崇名、薛松村、蘇郁雯、鄭洲楠、陳雪妮、鄭進丁、吳守哲、陳瑞文、翁英惠",
    "PublicArt_SelectTeam": "蔡崇名、薛松村、蘇郁雯、陳水財、李榮裕、潘元石",
    "PublicArt_Desc": "採寫意手法捏塑少女倚窗迎晨曦的神態，充滿了對未來的希望與想像，具「一日之計在於晨」的意義，勉勵同學把握時光學習與成長。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172101169.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120621172101307.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "e718f74a-6ff2-40fb-810c-c5d1d48d9fab",
    "PublicArt_Name": "現代里程碑Ⅲ",
    "PublicArt_Author": "王武森 ／ 采青藝術有限公司",
    "PublicArt_Year": "2002",
    "PublicArt_Size": "60公分×500公分×20公分",
    "PublicArt_Type": "陶瓷 - 陶土",
    "PublicArt_Material": "陶",
    "PublicArt_Place": "高雄市左營區南屏路1號 高雄市立勝利國民小學",
    "PublicArt_Funds": "130（含《現代里程碑Ⅰ》、《現代里程碑Ⅱ》）萬",
    "PublicArt_Unit": "高雄市立勝利國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林右正、林英昭、沈欽銘、汪碧芬、陳輝征、蔡東源、盧友義",
    "PublicArt_SelectTeam": "林熹俊、陳瑞文、楊欽富、顧超光",
    "PublicArt_Desc": "採用砌磚、水泥、泥砂為內部結構，外面鑲嵌陶板與陶塑，社區民眾共同參與，形成學校社區化的走向。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705201753882.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "8e756dcf-2bfb-43a0-9b68-b15a603c2d54",
    "PublicArt_Name": "歡樂人間",
    "PublicArt_Author": "郭清治",
    "PublicArt_Year": "2001",
    "PublicArt_Size": "450公分 x 350公分 x 540公分",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼",
    "PublicArt_Place": "高雄市小港區北林路六號 高雄市政府環境保護局南區資源回收廠 回饋設施廣場圓形鋪面上",
    "PublicArt_Funds": "500萬",
    "PublicArt_Unit": "高雄市政府環境保護局南區資源回收廠",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林勝雄、曾媚珍、張金玉、翁英惠、許一男、莊瑞忠、戴之焌",
    "PublicArt_SelectTeam": "楊文霓、陳水財、唐自常、蘇志徹、洪根深、吳梅嵩、莊瑞忠",
    "PublicArt_Desc": "主題表達人類與自然密不可分的相依相存關係，以人形符號根植於大地，不但代表向下札根，同時也是向上揚升，以盤旋昂揚之姿，舞動活躍的生命力，臉部堅毅的側面圖騰，象徵展望未來的新視野，也寓意未來的美好遠景，以三根柱狀造型架構出穩定和諧基礎。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705203234000.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7547c9c6-e31d-4243-9ba9-aecccc1b54cd",
    "PublicArt_Name": "貼上一份祝福",
    "PublicArt_Author": "樊炯烈",
    "PublicArt_Year": "2001",
    "PublicArt_Size": "鼠：75 x 60 x 3（公分）\t馬： 75 x 60 x 3（公分） \r\n牛：85 x 70 x 3（公分）\t羊： 75 x 60 x 3（公分） \r\n虎：75 x 60 x 3（公分)　　猴：100 x 60 x 3（公分）\r\n兔：75 x 60 x 3（公分）\t雞： 75 x 60 x 3（公分） \r\n龍：75 x 60 x 3（公分）\t狗： 75 x 60 x 3（公分） ?",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼、石",
    "PublicArt_Place": "高雄市三民區建國三路2-2號（高雄市站前郵局）",
    "PublicArt_Funds": "185萬",
    "PublicArt_Unit": "交通部郵政總局高雄市站前郵局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "蔡明山、林勝雄、陳水財、曾媚珍、黃永初、陳伯勳、孫真得、黃延哲、黃月霞、陳柳川",
    "PublicArt_SelectTeam": "盧明德、陳雪妮、翁美慧、邱博舜、吳玉成、賴新龍、潘元石",
    "PublicArt_Desc": "運用抽象語彙與線條來表現十二生肖造形，代表郵政業務能傳遞人們相互的思念，抽象語彙同樣說明郵政的親切。形狀如郵票的石雕作品，鑲在牆上，就像訴說寄信時的心情。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705203151922.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9081ea05-f5aa-451d-bd20-b5d26bf85977",
    "PublicArt_Name": "龍之華",
    "PublicArt_Author": "沈昌明",
    "PublicArt_Year": "2001",
    "PublicArt_Size": "高：405公分 基座：140公分 x 70公分 x 195公分",
    "PublicArt_Type": "石材 - 花崗岩",
    "PublicArt_Material": "銅、RC、紅寶石、花崗石",
    "PublicArt_Place": "高雄市左營區自由二路2號 高雄市立龍華國民中學",
    "PublicArt_Funds": "70萬",
    "PublicArt_Unit": "高雄市立龍華國民中學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "蔡國彬、陳明輝、黃昭雄、鄭淑心 、張添庸、林清朗、陳明雄",
    "PublicArt_SelectTeam": "許一男、張守真、洪郁大、吳梅嵩、洪根深、張柏烟",
    "PublicArt_Desc": "造型取優美V字型上升翻揚之勢，各角度線條簡潔明亮，厚薄變化蘊含蓄勢待發與生生不息，具神采飛揚的動感，主體以青銅打造，基座先以RC粗體再貼上紅寶石、花崗石板，以及象徵雲彩的珊瑚紅岩片，期勉全校師生發揮龍華精神，百尺竿頭更進一步，人人有清新活力。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705203105684.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "9bb04f30-d5be-49cc-b0ab-98bb4d6f3ad8",
    "PublicArt_Name": "運行不息",
    "PublicArt_Author": "郭清治",
    "PublicArt_Year": "2001",
    "PublicArt_Size": "作品：150公分 x 150公分 x 350公分 基座：153公分 x 153公分 x 35公分",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "石、不鏽鋼",
    "PublicArt_Place": "高雄市小港區北林路六號 高雄市政府環境保護局南區資源回收廠行政大樓前庭水池",
    "PublicArt_Funds": "500萬",
    "PublicArt_Unit": "高雄市政府環境保護局南區資源回收廠",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林勝雄、曾媚珍、張金玉、翁英惠、許一男、莊瑞忠、戴之焌",
    "PublicArt_SelectTeam": "楊文霓、陳水財、唐自常、蘇志徹、洪根深、吳梅嵩、莊瑞忠",
    "PublicArt_Desc": "作品強調視覺之趣味性與靈動活潑，水流運轉的圓石象徵地球淨化的觀念，寓意回收與再生，其底層為石柱，雕作為清靈波浪曲線造型，表現活潑豐富的自然造型，營造循環不息的生命律動。寓意萬物相生相長的運轉，以及資源回收再利用。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705203302554.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "772284d9-c13e-42ff-8df7-da8c8af8864c",
    "PublicArt_Name": "頤芳庭",
    "PublicArt_Author": "楊奉琛",
    "PublicArt_Year": "2001",
    "PublicArt_Size": "240公分 x 50公分 x 240公分 基座：180公分 x 90公分 x 80公分",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "銅、石",
    "PublicArt_Place": "高雄市楠梓區加昌路631號 行政院退輔會楠梓榮民自費安養中心",
    "PublicArt_Funds": "384.8967萬",
    "PublicArt_Unit": "行政院退輔會楠梓榮民自費安養中心",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "盧照開、張淵順、白雅玲、蘇信義、林楹棟 、王志立、羅燦博、范福平",
    "PublicArt_SelectTeam": "蔡樹同、王為河、黃壬來、蘇志徹、陳瑞文、洪百耀、曾媚珍",
    "PublicArt_Desc": "作品規劃五個景，以天、地、人為設計主軸，「天圓地方」是第一景，代表生之門。天──以女性人體傳達大地的孕育，在生命動（女體坐姿）、靜（女體臥姿）之間，周邊再加以植栽，傳達宇宙萬物生命奧妙。地──第二景以自然呈現石景表達為主題（不切割），具有石椅功能。人──小男孩、小女孩、小貓與小狗都可視為天地萬物生命的源起，有生生不息的寓意。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705203040980.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "a33829ee-fb81-49dd-aef1-fd5606f50d98",
    "PublicArt_Name": "翩翩彩雲(二件一組)",
    "PublicArt_Author": "賴純純",
    "PublicArt_Year": "2001",
    "PublicArt_Size": "116*30*440cm、196*50*220cm",
    "PublicArt_Type": "金屬 - 黃銅",
    "PublicArt_Material": "鋼鐵、漆、霓虹燈",
    "PublicArt_Place": "高雄市鼓山區美術館路80號   高雄市立美術館戶外園區",
    "PublicArt_Funds": "",
    "PublicArt_Unit": "",
    "PublicArt_Method": "",
    "PublicArt_ActTeam": "",
    "PublicArt_SelectTeam": "",
    "PublicArt_Desc": "作品具有自由扭動的有機造型及鮮明的色彩變化。兩片飛舞的彩雲，讓不同方向的觀者，看到不同的色彩與線條的律動變化。夜間彩雲邊緣透過彩色的霓虹燈，使色光與造型產生更立體、律動的變化，有如兩片在白天及晚上出現的雲彩。亮麗飛舞的雲彩，好像正在歡迎著嘉賓的到來\r\nAbout賴純純\r\n「對我而言，創作是一種需要，一種快樂；藝術則是一種媒介，而非我所追求的對象。」賴純純這樣詮釋自己的藝術觀。原本習畫的她，在對三度空間產生興趣後，開始由平面走向立體，因為三度空間的作品更能表現出光與影的無窮變化，是他畫家轉變為雕塑家的雲因。1986年賴純純在台北市立美術館展出的雕塑首獎作品，便傳達這種概念。1987年進入瑞士的藝術工作室，當工作室的兩面玻璃牆在黑夜中變成大鏡子，而反射出自己的小影時，她開始對真實與虛幻的變化發生興趣。她的作品面臨一次大改變，是因為自結婚後才發現自己離開真實世界實在太遠了，而體會到人與人、人與環境的相處都是需要關懷、經營繼而產生互動的關係。",
    "PublicArt_Image": null
  },
  {
    "PublicArt_INDEX": "08e453a8-12f6-42a4-b338-6661fcf30b3e",
    "PublicArt_Name": "展",
    "PublicArt_Author": "許尚智",
    "PublicArt_Year": "1999",
    "PublicArt_Size": "長900cm×寬600cm×高779cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "鋼構造及鋼索",
    "PublicArt_Place": "高雄市崗山區崗山南路42號 高雄縣立文化中心廣場",
    "PublicArt_Funds": "875萬",
    "PublicArt_Unit": "高雄縣立文化中心",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "",
    "PublicArt_SelectTeam": "",
    "PublicArt_Desc": "以「展」為主題，寓意為 開展向無限宇宙空間輻射延伸。 本作品以「展」之部首 「尸」為造型，鋼塑為材質， 並以鋼線連接於拱門上， 藉以表示以中央為主軸 延長至無限遠境， 表示「發展」及「拓展」的意義， 而弧型拱門是代表接納與包容。 於此造型之下， 並以卵石顏色、綠地按高山、平地之分， 描繪出高雄縣地域輪廓， 以象徵高雄縣文化拓展的無限榮景 ——以至全縣各地，以至全世界。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705203424226.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "190e200b-edc1-43e3-abf4-91eace248186",
    "PublicArt_Name": "密碼Cipher",
    "PublicArt_Author": "蒲浩明Pu Hao-Ming",
    "PublicArt_Year": "",
    "PublicArt_Size": "735 x 140×7cm",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不鏽鋼",
    "PublicArt_Place": "高雄市鼓山區明誠三路532號 高雄市立明華國民中學",
    "PublicArt_Funds": "90（P117-P118，2件組）萬",
    "PublicArt_Unit": "高雄市立明華國民中學",
    "PublicArt_Method": "委託創作",
    "PublicArt_ActTeam": "黃淑卿、許一男、黃建興、林佳禾、張克享、鄭惠丰",
    "PublicArt_SelectTeam": "黃淑卿、許一男、吳梅嵩、林佳禾、張克享",
    "PublicArt_Desc": "作品是一首蛹化為蝶之美麗過程的浮雕詩歌。藝術家用36個造型色塊，組成影響人類生活的「0」與「1」的二進位法之意象，形成一長串的生命鏈柱，意味各種樣態的生命延續和追求彩色人生的序位。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705204556940.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "7a456166-fe13-4be1-a5d4-7e43f8a9d1d0",
    "PublicArt_Name": "鎮音獸傳奇",
    "PublicArt_Author": "李億勳",
    "PublicArt_Year": "",
    "PublicArt_Size": "140*60*55cm",
    "PublicArt_Type": "陶瓷 - 瓷磚",
    "PublicArt_Material": "RC水泥、磁磚",
    "PublicArt_Place": "高雄小港區明義街77號 中庭遊戲庭園區",
    "PublicArt_Funds": "89萬",
    "PublicArt_Unit": "高雄市小港區明義國民小學",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "林貴芬、李俊賢、楊文霓、汪碧芬、盧福壽、周光宙、王漢瑞、林貴芬、郭景松",
    "PublicArt_SelectTeam": "王維潔 、張慧如、王振英、盧惠敏、吳守哲",
    "PublicArt_Desc": "相傳鎮音獸是隻「頭似鯨、眼似蜥、耳似貓、體似豚、背似魚、翅似鳥、尾似狸」之瑞獸，造型圓渾流暢，體態豐潤可愛，長相親和幽默。平日常群居於草原底下悠哉生活，生性喜愛與兒童相伴戲耍，酷愛美妙之音樂與兒童歡笑聲，唯對各種噪音非常容易激起其怒氣，憤怒時常會驅趕發出噪音之物，直至安靜為止。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120705204624975.jpg"
    ]
  },
  {
    "PublicArt_INDEX": "90d6bcd0-3660-4012-9bba-c817733cc34f",
    "PublicArt_Name": "懷舊念今、童年往事、焊動、現在進行式",
    "PublicArt_Author": "左彎藝術工作室",
    "PublicArt_Year": "",
    "PublicArt_Size": "(長)公分\t3230\t\r\n(寬)公分\t120\t\r\n(高)公分\t250",
    "PublicArt_Type": "金屬 - 不鏽鋼",
    "PublicArt_Material": "不銹鋼 型鋼 陶 玻璃",
    "PublicArt_Place": "高雄市前鎮區鎮中路132號  高雄市前鎮國中",
    "PublicArt_Funds": "2,200,000",
    "PublicArt_Unit": "高雄市政府文化局",
    "PublicArt_Method": "公開徵選",
    "PublicArt_ActTeam": "1.許一男理事長\r\n2.盧福壽副教授\r\n3.陳明輝副教授\r\n4.朱文璋家長會會長\r\n5.賴榮飛校長",
    "PublicArt_SelectTeam": "1.陳雪妮科長\r\n2.許一男理事長\r\n3.陳明輝副教授\r\n4.洪顯超副教授\r\n5.蘇志徹副教授",
    "PublicArt_Desc": "一直在記憶中尋找創作元素，時間軸的概念蘊然而生。對過去的記憶情感，對現在草衙的描繪，對於未來的期許，過去－現在－未來形成一個時間軸。運用不同材質、不同的表現方式呈現時間軸的概念，以一組多件的作品串聯起時間裏的記憶。作品將設置於學校大門口外牆一列排開，形成藝術長廊。走在紅磚道上就猶如揭開歷史的捲軸，一個故事、一個故事慢慢地訴說對未來的期待。",
    "PublicArt_Image": [
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155931388.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155930797.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155930360.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155931013.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155929835.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155929619.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155929402.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155928573.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155929136.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155930056.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155928924.jpg",
      "http://opendata.khcc.gov.tw/upload/PublicArt/20120618155930576.jpg"
    ]
  }
]
//json 檔

		var area = document.getElementById('area').value;
		var result=[];
		for(i=0; i<data.length; i++){
			var PublicArt_Place = data[i].PublicArt_Place;
			if(PublicArt_Place.match(area) || area== "all"){
				result.push(data[i]);
				console.log('show');
			}
		}
		
	
$('.areaSelect').html('');
		if(result.length!=0){
			for(var i=0; i<result.length; i++){
				var PublicArt_Name = result[i].PublicArt_Name;
				var PublicArt_Place = result[i].PublicArt_Place;
				var PublicArt_Image = result[i].PublicArt_Image;
				$('.areaSelect').append('<ul class = "show"><li><a href="detail.html"><img class = "result_img" src ='+PublicArt_Image+'></a><p id = "line"></p><h2 class = "result_name">'+PublicArt_Name+'</h2><p class = "result_place">地址：'+PublicArt_Place+'</p></li></ul>');
			}			
		}else{
			$('.areaSelect').html('<img class="unfind" src = "images/unfind.png">');
		}
	})
})


//首頁抓圖片資料
str='';
	for(i=0; i<data.length; i++){
		
		str+='<li><img src='+ data[i].PublicArt_Image+'></li>'
  
}
document.getElementById('slider').innerHTML = str;


//圖片輪播 start
 $(function(){
		// 先取得必要的元素並用 jQuery 包裝
		// 再來取得 $block 的寬度及設定動畫時間
		var $block = $('.slider-img'), 
			$slides = $block.find('.slides'), 
			$ul = $slides.find('ul'), 
			_width = $slides.width(), 
			_left = _width * -1, 
			_animateSpeed = 400, 
			// 加入計時器, 輪播時間及控制開關
			timer, _showSpeed = 3000, _stop = false;
		
		// 先把最後一個 li 的內容插入到第一個 li 前面
		// 並設定 $ul 的 left 及 width
		$ul.find('li:first').before($ul.find('li:last')).end().css({
			left: _left,
			width: _width * ($ul.find('li') + 1)
		});

		// 當點擊到 a.prev 時
		var $prev = $block.find('a.prev').click(function(){
			// 移動 $ul
			$ul.stop(false, true).animate({'left' : _left + _width}, _animateSpeed, function () {
				// 把最後一個 li 的內容插入到第一個 li 前面
				$ul.find('li:first').before($ul.find('li:last')).end().css('left', _left);
				// 當移動到正確位置後, 依判斷來啟動計時器
				if(!_stop) {
					clearTimeout(timer);
					timer = setTimeout(move, _showSpeed);
				}
			});
			return false;
		});
		
		// 當點擊到 a.next 時
		var $next = $block.find('a.next').click(function(){
			// 移動 $ul
			$ul.stop(false, true).animate({'left' : _left - _width}, _animateSpeed, function () {
				// 把第一個 li 的內容插入到最後一個 li 後面
				$ul.find('li:last').after($ul.find('li:first')).end().css('left', _left);
				// 當移動到正確位置後, 依判斷來啟動計時器
				if(!_stop) {
					clearTimeout(timer);
					timer = setTimeout(move, _showSpeed);
				}
			});
			return false;
		});
		
		// 如果滑鼠移入 $block 時
		$block.hover(function(){
			// 關閉開關及計時器
			_stop = true;
			clearTimeout(timer);
		}, function(){
			// 如果滑鼠移出 $block 時
			// 開啟開關及計時器
			_stop = false;
			timer = setTimeout(move, _showSpeed);
		}).find('a').focus(function(){
			this.blur();
		});
		
		// 計時器使用
		function move(){
			$next.click();
		};

		timer = setTimeout(move, _showSpeed);
	});

 //圖片輪播 end


const random = document.querySelector('#random');
let word = document.querySelector('#word');
const words = ['трясти', 'брать', 'будить', 'говорить', 'ломать', 'выбирать', 'украсть', 
	'водить', 'ездить верхом', 'бить', 'писать', 'есть', 'кусать', 
	'прятать', 'забывать', 'давать', 'падать', 'идти', 'быть', 'делать', 'видеть',
	'лежать', 'ударить', 'класть', 'установить', 'закрывать', 'бросать', 'резать',
	'обидеть', 'стоить'];
let oneWord = "";

random.addEventListener('click', showWord);

function showWord() {
word.innerHTML = randomWord(words)
}

function randomWord(app){
	let index = Math.floor(Math.random() * app.length);
	return app[index];
}

const word2 = document.querySelector('#word2');
const random2 = document.querySelector('#random2');

const words2 = ['читать','строить', 'гореть(жечь)', 'учить(сам)', 
	'чувствовать', 'значить(иметь в виду)', 'встречать', 'посылать,отправлять', 'тратить,проводить', 'оставлять,покидать',
	'пахнуть', 'держать', 'сидеть', 'терять,проигрывать', 'продавать',
	'рассказывать', 'получать,становиться', 'делать,производить', 'платить за', 
	'сказать', 'иметь', 'слышать', 'стоять', 'понимать'];

random2.addEventListener('click', showWord2);
function showWord2() {
word2.innerHTML = randomWord(words2)
}

const word3 = document.querySelector('#word3');
const random3 = document.querySelector('#random3');

const words3 = ['становиться','начинать', 'приходить/приезжать', 'висеть/развешивать', 
	'выигрывать', 'пить', 'петь', 'бежать/течь', 'плавать', 'рисовать/тащить',
	'летать', 'расти', 'знать', 'бросать', 'показывать',
	'приносить', 'покупать', 'ловить/хватать/успеть', 'драться/сражаться', 
	'обучать/научить', 'думать', 'кормить', 'сохранять/соблюдать(сост)', 'спать','находить', 'связывать', 'носить(одежду)'];

random3.addEventListener('click', showWord3);
function showWord3() {
word3.innerHTML = randomWord(words3)
}

const word4 = document.querySelector('#word4');
const random4 = document.querySelector('#random4');

const words4 = ['трясти', 'брать', 'будить', 'говорить', 'ломать', 'выбирать', 'украсть', 
	'водить', 'ездить верхом', 'бить', 'писать', 'есть', 'кусать', 
	'прятать', 'забывать', 'давать', 'падать', 'идти', 'быть', 'делать', 'видеть',
	'лежать', 'ударить', 'класть', 'установить', 'закрывать', 'бросать', 'резать',
	'обидеть', 'стоить', 'читать','строить', 'гореть(жечь)', 'учить(сам)', 
	'чувствовать', 'значить(иметь в виду)', 'встречать', 'посылать,отправлять', 'тратить,проводить', 'оставлять,покидать',
	'пахнуть', 'держать', 'сидеть', 'терять,проигрывать', 'продавать',
	'рассказывать', 'получать,становиться', 'делать,производить', 'платить за', 
	'сказать', 'иметь', 'слышать', 'стоять', 'понимать','становиться','начинать', 'приходить/приезжать', 'висеть/развешивать', 
	'выигрывать', 'пить', 'петь', 'бежать/течь', 'плавать', 'рисовать/тащить',
	'летать', 'расти', 'знать', 'бросать(привычка)', 'показывать',
	'приносить', 'покупать', 'ловить/хватать/успеть', 'драться/сражаться', 
	'обучать/научить', 'думать', 'кормить', 'сохранять/соблюдать(сост)', 'спать','находить', 'связывать', 'носить(одежду)'];

random4.addEventListener('click', showWord4);
function showWord4() {
english.innerText = "";
word4.innerHTML = randomWord(words4);
}


const english = document.querySelector('#english');

const showEng = document.querySelector('#showEng');

showEng.addEventListener('click',showEngWords);

function showEngWords(){
if (word4.innerHTML == 'приносить') english.innerText = 'bring brought'
if (word4.innerHTML == 'покупать') english.innerText = 'buy bought'
if (word4.innerHTML == 'ловить/хватать/успеть') english.innerText = 'catch caught'
if (word4.innerHTML == 'драться/сражаться') english.innerText = 'fight fought'
if (word4.innerHTML == 'обучать/научить') english.innerText = 'teach taught'

if (word4.innerHTML == 'думать') english.innerText = 'think thought'
if (word4.innerHTML == 'кормить') english.innerText = 'feed fed'
if (word4.innerHTML == 'сохранять/соблюдать(сост)') english.innerText = 'keep kept'
if (word4.innerHTML == 'спать') english.innerText = 'sleep slept'
if (word4.innerHTML == 'находить') english.innerText = 'find found'
if (word4.innerHTML == 'связывать') english.innerText = 'bind bound'
if (word4.innerHTML == 'носить(одежду)') english.innerText = 'wear wore worn'



if (word4.innerHTML == 'становиться') english.innerText = 'become became become'
if (word4.innerHTML == 'начинать') english.innerText = 'begin began begun'
if (word4.innerHTML == 'приходить/приезжать') english.innerText = 'come came come'
if (word4.innerHTML == 'висеть/развешивать') english.innerText = 'hang hung'
if (word4.innerHTML == 'выигрывать') english.innerText = 'win won'
if (word4.innerHTML == 'пить') english.innerText = 'drink drank drunk'
if (word4.innerHTML == 'петь') english.innerText = 'sing sang sung'
if (word4.innerHTML == 'бежать/течь') english.innerText = 'run ran run'
if (word4.innerHTML == 'плавать') english.innerText = 'swim swam swum'
if (word4.innerHTML == 'рисовать/тащить') english.innerText = 'draw drew drown'
if (word4.innerHTML == 'летать') english.innerText = 'fly flew flown'
if (word4.innerHTML == 'расти') english.innerText = 'grow grew grown'
if (word4.innerHTML == 'знать') english.innerText = 'know knew known '
if (word4.innerHTML == 'бросать(привычка)') english.innerText = 'quit'
if (word4.innerHTML == 'показывать') english.innerText = 'show showed shown'

if (word4.innerHTML == 'читать') english.innerText = 'read read'
if (word4.innerHTML == 'строить') english.innerText = 'build built'
if (word4.innerHTML == 'гореть(жечь)') english.innerText = 'burn burnt'
if (word4.innerHTML== 'учить(сам)') english.innerText = 'learn learnt'
if (word4.innerHTML== 'чувствовать') english.innerText = 'feel felt'
if (word4.innerHTML == 'значить(иметь в виду)') english.innerText = 'mean meant'
if (word4.innerHTML == 'встречать') english.innerText = 'meet met'
if (word4.innerHTML == 'посылать,отправлять') english.innerText = 'send sent'
if (word4.innerHTML == 'тратить,проводить') english.innerText = 'spend spent'
if (word4.innerHTML == 'оставлять,покидать') english.innerText = 'leave left'
if (word4.innerHTML == 'пахнуть') english.innerText = 'smell smelt'
if (word4.innerHTML == 'держать') english.innerText = 'hold held'
if (word4.innerHTML == 'сидеть') english.innerText = 'sit sat'
if (word4.innerHTML == 'терять,проигрывать') english.innerText = 'lose lost'
if (word4.innerHTML == 'продавать') english.innerText = 'sell sold'
if (word4.innerHTML == 'рассказывать') english.innerText = 'tell told'
if (word4.innerHTML == 'получать,становиться') english.innerText = 'get got'
if (word4.innerHTML == 'делать,производить') english.innerText = 'make made'
if (word4.innerHTML == 'платить за') english.innerText = 'pay paid'
if (word4.innerHTML == 'сказать') english.innerText = 'say said'
if (word4.innerHTML == 'иметь') english.innerText = 'have had'
if (word4.innerHTML == 'слышать') english.innerText = 'hear heard'
if (word4.innerHTML == 'стоять') english.innerText = 'stand stood '
if (word4.innerHTML == 'понимать') english.innerText = 'understand understood'

if (word4.innerHTML == 'падать') english.innerText = 'fall fell fallen'
if (word4.innerHTML == 'идти') english.innerText = 'go went gone'
if (word4.innerHTML == 'быть') english.innerText = ' be was/were been'
if (word4.innerHTML == 'делать') english.innerText = 'do did done'
if (word4.innerHTML == 'видеть') english.innerText = 'see saw seen'
if (word4.innerHTML == 'лежать') english.innerText = 'lie lay lain'
if (word4.innerHTML == 'ударить') english.innerText = 'hit'
if (word4.innerHTML == 'класть') english.innerText = 'put'
if (word4.innerHTML == 'установить') english.innerText = 'set'
if (word4.innerHTML == 'закрывать') english.innerText = 'shut'
if (word4.innerHTML == 'бросать') english.innerText = 'throw threw thrown'
if (word4.innerHTML == 'резать') english.innerText = 'cut'
if (word4.innerHTML == 'обидеть') english.innerText = 'hurt'
if (word4.innerHTML == 'стоить') english.innerText = 'cost'


if (word4.innerHTML == 'трясти') english.innerText = 'shake shook shaken'
if (word4.innerHTML == 'брать') english.innerText = 'take took taken'
if (word4.innerHTML == 'будить') english.innerText = 'wake woke woken'
if (word4.innerHTML == 'говорить') english.innerText = 'speak spoke spoken'
if (word4.innerHTML == 'ломать') english.innerText = 'break broke broken'
if (word4.innerHTML == 'выбирать') english.innerText = 'choose chose chosen'
if (word4.innerHTML == 'украсть') english.innerText = 'steal stole stolen'
if (word4.innerHTML == 'водить') english.innerText = 'drive drove driven'
if (word4.innerHTML == 'ездить верхом') english.innerText = 'ride rode ridden'
if (word4.innerHTML == 'бить') english.innerText = 'beat beat beaten'
if (word4.innerHTML == 'писать') english.innerText = 'write wrote written'
if (word4.innerHTML == 'есть') english.innerText = 'eat ate eaten'
if (word4.innerHTML == 'кусать') english.innerText = 'bite bit bitten '
if (word4.innerHTML == 'прятать') english.innerText = 'hide hid hidden'
if (word4.innerHTML == 'забывать') english.innerText = 'forget forgot forgotten'
if (word4.innerHTML == 'давать') english.innerText = 'give gave given'
}

const word5 = document.querySelector('#word5');
const random5 = document.querySelector('#random5');
const english2 = document.querySelector('#english2');
const showEng2 = document.querySelector('#showEng2');

const words5 = ['редко','скоро','обычно','часто','всегда','иногда','еженедельно',
	'ежедневно','ежемесячно','постоянно','каждый день/месяц','никогда','в конце концов',
	'недавно','снова','вообще(нет)','даже','до того как','после того как','с трудом/еле-еле',
	'головная боль','боль в спине','боль в животе','зубная боль','боль в ухе',
	'глаз','болезненный','горло','костюм','обувь','выступление','ключ к разгадке',
	'достоинство','лысый','моя(обладание)','твой(обладание)','её(обладание)','его(обладание)',
	'наша(обладание)','их(обладание)','высокий','добрый','далекий','громкий','реально',
	'грязный','расстроенный','милый','пьяный','волосы','туда/там','здесь','близко','отвечать',
	'проверять','целовать','приглашать','скучать','повторять','жениться','жарить','навещать',
	'чистить зубы','однажды','всё время','один раз','два раза','еще один раз','пару раз',
	'несколько раз','этот','эти','тот','те','звонить','слушать','ждать','смотреть на','искать',
	'вспомнить','спрашивать о чем-то','играть с','верить','важный','чистый','злой','идеальный',
	'любимый','грузовик','поздний','больной','голодный','радостный','удивительный',
	'великий','забавный','тупой','уставший','тоже/слишком','просто','очень','такой'];

random5.addEventListener('click', showWord5);
function showWord5(){
	english2.innerText = "";
	word5.innerHTML = randomWord(words5);
}
showEng2.addEventListener('click', showEngWords2);
function showEngWords2(){
	if (word5.innerHTML == 'такой') english2.innerText = 'so';
	if (word5.innerHTML == 'очень') english2.innerText = 'very';
	if (word5.innerHTML == 'просто') english2.innerText = 'just';
	if (word5.innerHTML == 'тоже/слишком') english2.innerText = 'too';
	if (word5.innerHTML == 'уставший') english2.innerText = 'tired';
	if (word5.innerHTML == 'тупой') english2.innerText = 'dumb';
	if (word5.innerHTML == 'забавный') english2.innerText = 'funny';
	if (word5.innerHTML == 'великий') english2.innerText = 'great';
	if (word5.innerHTML == 'удивительный') english2.innerText = 'amazing';
	if (word5.innerHTML == 'радостный') english2.innerText = 'glad';
	if (word5.innerHTML == 'голодный') english2.innerText = 'hangry';
	if (word5.innerHTML == 'больной') english2.innerText = 'sick';
	if (word5.innerHTML == 'поздний') english2.innerText = 'late';
	if (word5.innerHTML == 'грузовик') english2.innerText = 'truck';
	if (word5.innerHTML == 'любимый') english2.innerText = 'beloved';
	if (word5.innerHTML == 'идеальный') english2.innerText = 'perfect';
	if (word5.innerHTML == 'злой') english2.innerText = 'angry';
	if (word5.innerHTML == 'чистый') english2.innerText = 'clean';
	if (word5.innerHTML == 'важный') english2.innerText = 'important';
	if (word5.innerHTML == 'верить') english2.innerText = 'believe';

	if (word5.innerHTML == 'играть с') english2.innerText = 'play with';
	if (word5.innerHTML == 'спрашивать о чем-то') english2.innerText = 'ask about';
	if (word5.innerHTML == 'вспомнить') english2.innerText = 'remember';
	if (word5.innerHTML == 'искать') english2.innerText = 'look for';
	if (word5.innerHTML == 'смотреть на') english2.innerText = 'look at';
	if (word5.innerHTML == 'ждать') english2.innerText = 'wait for';
	if (word5.innerHTML == 'слушать') english2.innerText = 'listen to';
	if (word5.innerHTML == 'звонить') english2.innerText = 'call';
	if (word5.innerHTML == 'те') english2.innerText = 'those';
	if (word5.innerHTML == 'тот') english2.innerText = 'that';
	if (word5.innerHTML == 'эти') english2.innerText = 'these';
	if (word5.innerHTML == 'этот') english2.innerText = 'this';
	if (word5.innerHTML == 'несколько раз') english2.innerText = 'several times/a few times';
	if (word5.innerHTML == 'пару раз') english2.innerText = 'a couple of times';
	if (word5.innerHTML == 'еще один раз') english2.innerText = 'one more time';
	if (word5.innerHTML == 'два раза') english2.innerText = 'twice';
	if (word5.innerHTML == 'один раз') english2.innerText = 'once';
	if (word5.innerHTML == 'всё время') english2.innerText = 'all the time';

	if (word5.innerHTML == 'однажды') english2.innerText = 'one day';
	if (word5.innerHTML == 'чистить зубы') english2.innerText = 'brush teeth';
	if (word5.innerHTML == 'навещать') english2.innerText = 'visit';
	if (word5.innerHTML == 'жарить') english2.innerText = 'roast';
	if (word5.innerHTML == 'жениться') english2.innerText = 'marry';
	if (word5.innerHTML == 'повторять') english2.innerText = 'repeat';
	if (word5.innerHTML == 'скучать') english2.innerText = 'miss';
	if (word5.innerHTML == 'приглашать') english2.innerText = 'invite';
	if (word5.innerHTML == 'целовать') english2.innerText = 'kiss';
	if (word5.innerHTML == 'проверять') english2.innerText = 'check';
	if (word5.innerHTML == 'отвечать') english2.innerText = 'answer';
	if (word5.innerHTML == 'близко') english2.innerText = 'close';
	if (word5.innerHTML == 'здесь') english2.innerText = 'here';
	if (word5.innerHTML == 'туда/там') english2.innerText = 'there';
	if (word5.innerHTML == 'волосы') english2.innerText = 'hair';
	if (word5.innerHTML == 'пьяный') english2.innerText = 'drunk';
	if (word5.innerHTML == 'милый') english2.innerText = 'cute';
	if (word5.innerHTML == 'расстроенный') english2.innerText = 'upset';
	if (word5.innerHTML == 'грязный') english2.innerText = 'dirty';
	if (word5.innerHTML == 'реально') english2.innerText = 'really';
	if (word5.innerHTML == 'громкий') english2.innerText = 'loud';
	if (word5.innerHTML == 'далекий') english2.innerText = 'far';
	if (word5.innerHTML == 'добрый') english2.innerText = 'kind';
	if (word5.innerHTML == 'высокий') english2.innerText = 'tall';
	if (word5.innerHTML == 'их(обладание)') english2.innerText = 'theirs';
	if (word5.innerHTML == 'наша(обладание)') english2.innerText = 'ours';
	if (word5.innerHTML == 'его(обладание)') english2.innerText = 'his';
	if (word5.innerHTML == 'её(обладание)') english2.innerText = 'hers';
	if (word5.innerHTML == 'твой(обладание)') english2.innerText = 'yours';
	if (word5.innerHTML == 'моя(обладание)') english2.innerText = 'mine';
	if (word5.innerHTML == 'лысый') english2.innerText = 'bald';
	if (word5.innerHTML == 'достоинство') english2.innerText = 'dignity';

	if (word5.innerHTML == 'ключ к разгадке') english2.innerText = 'clue';
	if (word5.innerHTML == 'выступление') english2.innerText = 'perfomance';
	if (word5.innerHTML == 'обувь') english2.innerText = 'shoes';
	if (word5.innerHTML == 'костюм') english2.innerText = 'suit';
	if (word5.innerHTML == 'горло') english2.innerText = 'throat';
	if (word5.innerHTML == 'болезненный') english2.innerText = 'sore';
	if (word5.innerHTML == 'глаз') english2.innerText = 'eye';
	if (word5.innerHTML == 'боль в ухе') english2.innerText = 'earache';
	if (word5.innerHTML == 'зубная боль') english2.innerText = 'toothache';
	if (word5.innerHTML == 'боль в животе') english2.innerText = 'stomachache';
	if (word5.innerHTML == 'боль в спине') english2.innerText = 'backache';
	if (word5.innerHTML == 'головная боль') english2.innerText = 'headache';
	if (word5.innerHTML == 'с трудом/еле-еле') english2.innerText = 'hardly';
	if (word5.innerHTML == 'после того как') english2.innerText = 'after';
	if (word5.innerHTML == 'до того как') english2.innerText = 'before';

	if (word5.innerHTML == 'даже') english2.innerText = 'even';
	if (word5.innerHTML == 'вообще(нет)') english2.innerText = 'at all';
	if (word5.innerHTML == 'снова') english2.innerText = 'again';
	if (word5.innerHTML == 'недавно') english2.innerText = 'recently';
	if (word5.innerHTML == 'в конце концов') english2.innerText = 'finally';
	if (word5.innerHTML == 'никогда') english2.innerText = 'never';
	if (word5.innerHTML == 'каждый день/месяц') english2.innerText = 'every day/month';
	if (word5.innerHTML == 'постоянно') english2.innerText = 'constantly';
	if (word5.innerHTML == 'ежемесячно') english2.innerText = 'monthly';
	if (word5.innerHTML == 'ежедневно') english2.innerText = 'daily';
	if (word5.innerHTML == 'еженедельно') english2.innerText = 'weekly';
	if (word5.innerHTML == 'иногда') english2.innerText = 'sometimes';
	if (word5.innerHTML == 'всегда') english2.innerText = 'always';
	if (word5.innerHTML == 'часто') english2.innerText = 'often';
	if (word5.innerHTML == 'обычно') english2.innerText = 'usually';
	if (word5.innerHTML == 'скоро') english2.innerText = 'soon';
	if (word5.innerHTML == 'редко') english2.innerText = 'rarely';
}






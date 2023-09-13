/*dress up*/

// start over
function noClothes() {
	document.getElementById('o1').classList.add('hidden');
	document.getElementById('o2').classList.add('hidden');
	document.getElementById('o3').classList.add('hidden');
	document.getElementById('o4').classList.add('hidden');
    document.getElementById('o1text').classList.add('hidden');
    document.getElementById('o2text').classList.add('hidden');
    document.getElementById('o3text').classList.add('hidden');
    document.getElementById('o4text').classList.add('hidden');
    document.getElementById('o1body').classList.add('hidden');
    document.getElementById('o2body').classList.add('hidden');
    document.getElementById('o3body').classList.add('hidden');
    document.getElementById('o4body').classList.add('hidden');
    document.getElementById('body').classList.remove('hidden');
    document.getElementById('bodytext').classList.remove('hidden');
}

let strip = document.getElementById('strip-button');

strip.onclick = noClothes;

// outfit 1

document.getElementsByClassName('outfit');

s1 = document.getElementById('o1'); 

    function out1 () {
        document.getElementById('o2').classList.add('hidden');
        document.getElementById('o3').classList.add('hidden');
        document.getElementById('o4').classList.add('hidden');
        document.getElementById('body').classList.add('hidden');
        document.getElementById('bodytext').classList.add('hidden');
        document.getElementById('o2text').classList.add('hidden');
        document.getElementById('o3text').classList.add('hidden');
        document.getElementById('o4text').classList.add('hidden');
        document.getElementById('o2body').classList.add('hidden');
        document.getElementById('o3body').classList.add('hidden');
        document.getElementById('o4body').classList.add('hidden');
        document.getElementById('o1').classList.remove('hidden');
        document.getElementById('o1text').classList.remove('hidden');
        document.getElementById('o1body').classList.remove('hidden');
    }

    document.getElementById('s1').onclick = out1;

//outfit 2
    
    function out2 () {
        document.getElementById('o1').classList.add('hidden');
        document.getElementById('o3').classList.add('hidden');
        document.getElementById('o4').classList.add('hidden');
        document.getElementById('body').classList.add('hidden');
        document.getElementById('bodytext').classList.add('hidden');
        document.getElementById('o1text').classList.add('hidden');
        document.getElementById('o3text').classList.add('hidden');
        document.getElementById('o4text').classList.add('hidden');
        document.getElementById('o1body').classList.add('hidden');
        document.getElementById('o3body').classList.add('hidden');
        document.getElementById('o4body').classList.add('hidden');
        document.getElementById('o2').classList.remove('hidden');
        document.getElementById('o2text').classList.remove('hidden');
        document.getElementById('o2body').classList.remove('hidden');
    }
    
    document.getElementById('s2').onclick = out2;

//outfit 3
    
    function out3 () {
        document.getElementById('o1').classList.add('hidden');
        document.getElementById('o2').classList.add('hidden');
        document.getElementById('o4').classList.add('hidden');
        document.getElementById('body').classList.add('hidden');
        document.getElementById('bodytext').classList.add('hidden');
        document.getElementById('o1text').classList.add('hidden');
        document.getElementById('o2text').classList.add('hidden');
        document.getElementById('o4text').classList.add('hidden');
        document.getElementById('o1body').classList.add('hidden');
        document.getElementById('o2body').classList.add('hidden');
        document.getElementById('o4body').classList.add('hidden');
        document.getElementById('o3').classList.remove('hidden');
        document.getElementById('o3text').classList.remove('hidden');
        document.getElementById('o3body').classList.remove('hidden');
    }
    
    document.getElementById('s3').onclick = out3;

// outfit 4
    
    function out4 () {
        document.getElementById('o1').classList.add('hidden');
        document.getElementById('o2').classList.add('hidden');
        document.getElementById('o3').classList.add('hidden');
        document.getElementById('body').classList.add('hidden');
        document.getElementById('bodytext').classList.add('hidden');
        document.getElementById('o1text').classList.add('hidden');
        document.getElementById('o2text').classList.add('hidden');
        document.getElementById('o3text').classList.add('hidden');
        document.getElementById('o1body').classList.add('hidden');
        document.getElementById('o2body').classList.add('hidden');
        document.getElementById('o3body').classList.add('hidden');
        document.getElementById('o4').classList.remove('hidden')
        document.getElementById('o4text').classList.remove('hidden');
        document.getElementById('o4body').classList.remove('hidden');
    }
    
    document.getElementById('s4').onclick = out4;
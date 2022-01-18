console.clear();

if(Tone.context.state !== 'running'){
        $('.start').show()
        document.querySelector('#start').addEventListener('click', function(){
            Tone.context.resume().then(()=>{
                $('.start').hide();
                sequencer();
            });
        });
    }else{
        sequencer();
    }

function sequencer(){
    const kick = new Tone.Player('./drums/kick-electro01.wav').toMaster();
    const snare = new Tone.Player('./drums/snare-lofi02.wav').toMaster();
    const hihatAcoustic = new Tone.Player('./drums/hihat-acoustic02.wav').toMaster();
    const hihatDigital = new Tone.Player('./drums/hihat-digital.wav').toMaster();
    const hihatElectro = new Tone.Player('./drums/hihat-electro.wav').toMaster();
    const hihatReso = new Tone.Player('./drums/hihat-reso.wav').toMaster();
    const kickGritty = new Tone.Player('./drums/kick-gritty.wav').toMaster();
    const percTribal = new Tone.Player('./drums/perc-tribal.wav').toMaster();
    const percHollow = new Tone.Player('./drums/perc-hollow.wav').toMaster();
    const kickHeavy = new Tone.Player('./drums/kick-heavy.wav').toMaster();
    let index = 0;
    
    Tone.Transport.scheduleRepeat(repeat, '16n')
    Tone.Transport.start();

    function repeat(){
        let step = index % 16;
        let kickInputs = document.querySelector(`.kick input:nth-child(${step+1})`);
        if(kickInputs.checked){
            kick.start();
        }

        let snareInputs = document.querySelector(`.snare input:nth-child(${step+1})`);
        if(snareInputs.checked){
            snare.start();
        }

        let hihatAcousticInputs = document.querySelector(`.hihatacoustic input:nth-child(${step+1})`);
        if(hihatAcousticInputs.checked){
            hihatAcoustic.start();
        }

        let hihatDigitalInputs = document.querySelector(`.hihatdigital input:nth-child(${step+1})`);
        if(hihatDigitalInputs.checked){
            hihatDigital.start();
        }

        let hihatElectroInputs = document.querySelector(`.hihatelectro input:nth-child(${step+1})`);
        if(hihatElectroInputs.checked){
            hihatElectro.start();
        }

        let hihatResoInputs = document.querySelector(`.hihatreso input:nth-child(${step+1})`);
        if(hihatResoInputs.checked){
            hihatReso.start();
        }

        let kickGrittyInputs = document.querySelector(`.kickgritty input:nth-child(${step+1})`);
        if(kickGrittyInputs.checked){
            kickGritty.start();
        }

        let percTribalInputs = document.querySelector(`.perctribal input:nth-child(${step+1})`);
        if(percTribalInputs.checked){
            percTribal.start();
        }

        let percHollowInputs = document.querySelector(`.perchollow input:nth-child(${step+1})`);
        if(percHollowInputs.checked){
            percHollow.start();
        }

        let kickHeavyInputs = document.querySelector(`.kickheavy input:nth-child(${step+1})`);
        if(kickHeavyInputs.checked){
            kickHeavy.start();
        }
        index ++;
    }
}
sequencer()

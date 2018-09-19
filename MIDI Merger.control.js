
loadAPI(1);

host.defineController("accSone", "MIDI Merger", "1.0", "d9908e15-1c66-4228-8f8d-e6320d10b985", "accSone");
host.defineMidiPorts(2, 0);


function init() {
   host.getMidiInPort(0).setMidiCallback(onMidi0);
   noteIn=host.getMidiInPort(0).createNoteInput("accSone", "??????");   
   host.getMidiInPort(1).setMidiCallback(onMidi1);
   
}

function onMidi0(status, data1, data2) {
   println("mi0");
}
function onMidi1(status, data1, data2) {
   println("mi1");
   noteIn.sendRawMidiEvent(status,data1,data2);		
}



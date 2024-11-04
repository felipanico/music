samples(
  {
    bass:'https://cdn.freesound.org/previews/614/614637_2434927-hq.mp3',
    disco:'https://cdn.freesound.org/previews/702/702142_15147295-lq.mp3',
    
  }
)

samples('bubo:waveforms');

let drum = "bd*4, [- cp]*2, [- hh]*4";

let machine = "RolandTR909";

let pattern1 = stack (
    sound(drum).bank(machine),
    s('bass').loopAt(4)
)

let pattern2 = note("<[g3,b3,e4]!2 [a3,c3,e4] [b3,d3,f#4]>")
    .n("<1 2 3 4 5 6 7 8 9 10>/2").room(0.5).size(0.9)
    .s('wt_flute').velocity(0.25).often(n => n.ply(2))
    .release(0.125).decay("<0.1 0.25 0.3 0.4>").sustain(0)
    .cutoff(2000).cutoff("<1000 2000 4000>").fast(4)
    ._scope();

let pattern3 = stack (
    sound(drum).bank(machine),
    s('bass').loopAt(6)
)

cat(
  sound(drum).bank(machine),
  pattern1,
  sound(drum).bank(machine),
  pattern3,
  sound(drum).bank(machine),
  //pattern3
)

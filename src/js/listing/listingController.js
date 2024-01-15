export default function(state) {
   state.emitter.subscribe('event:render-listing', ()=> {
    console.log(state);
   })
}
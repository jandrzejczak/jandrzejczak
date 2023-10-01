export default function animate(callback: any) {
  function loop(time: number) {
    callback(time);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

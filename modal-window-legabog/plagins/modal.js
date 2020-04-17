function _createModal(
  options,
  title = "Modal title",
  content = `<div class="modal-body">
<p>Lorem ipsum dolor sit.</p>
<p>Lorem ipsum dolor sit.</p>
</div>
<div class="modal-footer">
<button>Ok</button>
<button>Cancel</button>
</div>`,
  xwidth = '400px'
) {
  const modal = document.createElement("div");
  modal.classList.add("lmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-overlay" onClick="modal.close();">
        <div class="modal-window" style="width: ${xwidth};">
            <div class="modal-header">
                <span class="modal-title">${title}</span>
                <span class="modal-close" onClick="modal.close();">&times;</span>
            </div>
            ${content}
        </div>
    </div>
`
  );
  document.body.appendChild(modal);
  return modal;
}

// title: string
// closeable: bolean
// content: string
// width: string ('400px')
// destroy(): void
// Окно должно закрываться(через нажатие на крестик или поле оверлэй)
// ----------------------------
// setContent(html: string): void | PUBLIC
// onClose(): void
// onOpen(): void
// beforeClose(): boolean
// ----------------------------
// animate.css
$.modal = function (options, xtitle, xcontent) {  
  const $modal = _createModal(options, xtitle, xcontent);
  const ANIMATION_SPEED = 200;
  let closing = false;
  let closeable = true;

  return {
    open() {
      closeable ? null : $modal.classList.add("hide-modal-close");
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        closing = false;
        $modal.classList.remove("hide");
      }, ANIMATION_SPEED);
    },
    destroy() {
      $modal.remove();
    },
  };
};

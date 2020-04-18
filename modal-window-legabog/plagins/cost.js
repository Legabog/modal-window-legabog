function _createCostModal(options) {
  const cost_modal = document.createElement("div");
  cost_modal.classList.add("cost-modal");
  cost_modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="cost-modal-header">
        <span class="cost-modal-title">FruitTitle</span>
        <span class="cost-modal-close">&times;</span>
    </div>
    <div class="cost-modal-body">
        <p>CONTENT</p>
    </div>
    <div class="cost-modal-footer">
        <button>Ok</button>
    </div>
    `
  );

  document.body.appendChild(cost_modal);
  return cost_modal;
}

$.cost_modal = function(options) {
    
}

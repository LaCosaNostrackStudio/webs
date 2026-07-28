const quoteForm = document.getElementById('quoteForm');
if (quoteForm) quoteForm.addEventListener('submit', function(event){
  event.preventDefault();
  const school = document.getElementById('school').value.trim();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const text = `Hola, deseo solicitar información o cotización de Si-Re-FaleanDo.%0A%0AEscuela: ${encodeURIComponent(school)}%0AContacto: ${encodeURIComponent(name)}%0ACorreo: ${encodeURIComponent(email || 'No indicado')}%0AMensaje: ${encodeURIComponent(message || 'Deseo recibir información sobre el programa musical para escuelas.')}`;
  window.open(`https://wa.me/17872156908?text=${text}`, '_blank');
});


// Smooth scroll para los botones del menú y botones internos
// Puedes editar o eliminar esta parte en Dreamweaver si necesitas otro comportamiento.
document.querySelectorAll('a[href^="#"]').forEach(function(link){
  link.addEventListener('click', function(event){
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Funciones de tienda
const SHOP_WHATSAPP_NUMBER = '17872156908';
const CART_STORAGE_KEY = 'sirefaleando_cart';

function money(value){
  const number = Number(value || 0);
  return 'US$' + number.toFixed(2).replace('.00','');
}

function getCart(){
  try {
    const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    return Array.isArray(cart) ? cart : [];
  } catch(error) {
    return [];
  }
}

function saveCart(cart){
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  const totalItems = getCart().reduce(function(sum,item){
    return sum + Number(item.quantity || 0);
  }, 0);
  document.querySelectorAll('[data-cart-count]').forEach(function(badge){
    badge.textContent = totalItems;
  });
}

function setupProductZoom(){
  const zoomButtons = document.querySelectorAll('.image-zoom-trigger');
  const shopModal = document.getElementById('shopModal');
  if (!zoomButtons.length || !shopModal) return;

  const modalImg = shopModal.querySelector('img');
  const closeBtn = shopModal.querySelector('.shop-modal-close');

  zoomButtons.forEach(function(button){
    button.addEventListener('click', function(){
      modalImg.src = this.dataset.large;
      shopModal.classList.add('active');
      shopModal.setAttribute('aria-hidden', 'false');
    });
  });

  closeBtn.addEventListener('click', function(){
    shopModal.classList.remove('active');
    shopModal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  });

  shopModal.addEventListener('click', function(event){
    if (event.target === shopModal) closeBtn.click();
  });
}

function setupAddToCart(){
  document.querySelectorAll('.add-to-cart').forEach(function(button){
    button.addEventListener('click', function(){
      const qtyInput = document.getElementById('qty') || this.closest('.product-detail-card')?.querySelector('input[type="number"]');
      const qty = Math.max(1, parseInt((qtyInput && qtyInput.value) || '1', 10));
      const item = {
        product: this.dataset.product,
        price: Number(this.dataset.price),
        quantity: qty
      };

      const cart = getCart();
      const existing = cart.find(function(row){ return row.product === item.product; });
      if (existing) existing.quantity += qty;
      else cart.push(item);

      saveCart(cart);

      const message = document.querySelector('.cart-message');
      if (message) {
        message.innerHTML = item.product + ' agregado al carrito. <a href="carrito.html">Ver carrito</a>';
      }
    });
  });
}

function renderCartPage(){
  const list = document.getElementById('cartItems');
  if (!list) return;

  const empty = document.getElementById('emptyCart');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  const sendBtn = document.getElementById('sendOrder');
  const clearBtn = document.getElementById('clearCart');
  let cart = getCart();

  list.innerHTML = '';

  if (!cart.length) {
    if (empty) empty.style.display = 'grid';
    list.style.display = 'none';
    if (sendBtn) sendBtn.disabled = true;
    if (clearBtn) clearBtn.disabled = true;
    if (subtotalEl) subtotalEl.textContent = money(0);
    if (totalEl) totalEl.textContent = money(0);
    return;
  }

  if (empty) empty.style.display = 'none';
  list.style.display = 'grid';
  if (sendBtn) sendBtn.disabled = false;
  if (clearBtn) clearBtn.disabled = false;

  cart.forEach(function(item, index){
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = '<div><h3>'+item.product+'</h3><p>'+money(item.price)+' c/u</p></div>'+
      '<div class="cart-item-actions"><input type="number" min="1" value="'+item.quantity+'" data-cart-index="'+index+'"><strong>'+money(item.price * item.quantity)+'</strong><button type="button" data-remove-index="'+index+'" aria-label="Eliminar producto"><i class="fa-solid fa-xmark"></i></button></div>';
    list.appendChild(row);
  });

  const total = cart.reduce(function(sum,item){
    return sum + Number(item.price || 0) * Number(item.quantity || 0);
  }, 0);

  if (subtotalEl) subtotalEl.textContent = money(total);
  if (totalEl) totalEl.textContent = money(total);

  list.querySelectorAll('[data-cart-index]').forEach(function(input){
    input.addEventListener('change', function(){
      const idx = Number(this.dataset.cartIndex);
      cart[idx].quantity = Math.max(1, parseInt(this.value || '1', 10));
      saveCart(cart);
      renderCartPage();
    });
  });

  list.querySelectorAll('[data-remove-index]').forEach(function(button){
    button.addEventListener('click', function(){
      const idx = Number(this.dataset.removeIndex);
      cart.splice(idx,1);
      saveCart(cart);
      renderCartPage();
    });
  });

  if (clearBtn) {
    clearBtn.onclick = function(){
      saveCart([]);
      renderCartPage();
    };
  }

  if (sendBtn) {
    sendBtn.onclick = function(){
      const currentCart = getCart();
      if (!currentCart.length) return;
      const customerName=(document.getElementById('customerName')||{}).value?.trim()||'';
      const customerAddress=(document.getElementById('customerAddress')||{}).value?.trim()||'';
      if(!customerName || !customerAddress){
        alert('Por favor complete Nombre y Dirección antes de enviar el pedido.');
        return;
      }

      const lines = currentCart.map(function(item){
        return '- ' + item.product + ' | Cantidad: ' + item.quantity + ' | Precio: ' + money(item.price) + ' | Subtotal: ' + money(item.price * item.quantity);
      }).join('\n');

      const orderTotal = currentCart.reduce(function(sum,item){
        return sum + Number(item.price || 0) * Number(item.quantity || 0);
      }, 0);

      const text = 'Hola, deseo hacer este pedido de la tienda Si-Re-FaleanDo:\n\n' + lines + '\n\nTotal: ' + money(orderTotal) + '\n\nMi nombre es: '+customerName+'\nDirección o punto de entrega: '+customerAddress+'';
      window.open('https://wa.me/' + SHOP_WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text), '_blank');
    };
  }
}

updateCartCount();
setupProductZoom();
setupAddToCart();
renderCartPage();

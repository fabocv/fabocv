import { Component, computed, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './ImageModal.html'
})
export class ImagenModalComponent {
  showModal: boolean = false;
  selectedImage: string = '';
  @Input() data: {image: string | null, title: string} | null = null

  abrirModal2 = computed(() => {
    if (!!this.data && this.data?.image) this.abrirModal(this.data.image)
  })
  
  abrirModal(imagen: string): void {
    this.selectedImage = imagen;
    this.showModal = true;
  }
  
  cerrarModal(): void {
    this.showModal = false;
  }
}

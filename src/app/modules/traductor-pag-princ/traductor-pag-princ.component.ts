import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraductorPrincServiceService } from 'src/app/services/traductor-princ-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-traductor-pag-princ',
  templateUrl: './traductor-pag-princ.component.html',
  styleUrls: ['./traductor-pag-princ.component.css'],
})
export class TraductorPagPrincComponent implements OnInit {
  public formTraductor!: FormGroup;
  public datosTA: any = [];
  public formData = new FormData();
  public TDT = "español";
  constructor(
    private tradPrincService: TraductorPrincServiceService,
    private fb: FormBuilder,
    
  ) {
    tradPrincService.getTraduccion().subscribe((r) => {
      console.log(r);

      this.datosTA = r;
    });

    this.formTraductor = fb.group({
      oracionTraductora: ['', Validators.compose([Validators.required])],
      oracionTraducida: [''],
    });
  }

  ngOnInit(): void {}  

  trad() {
    this.formData.append('oracion', this.formTraductor.value.oracionTraductora);
    console.log(this.formTraductor.value.oracionTraductora);


    const data = {
      oracion: this.formTraductor.value.oracionTraductora,
    };

    const jsonData = JSON.stringify(data);

    if (this.TDT =="español") {
      this.tradPrincService
      .postTraduccion(this.formTraductor.value.oracionTraductora)
      .subscribe((r) => {
        console.log(r);

        if (r.traduccion === null) {
          Swal.fire({
            title: "intenta otra oracción",
            text: "Error en traduccion no se encontro una traducción adecuada",
            icon: "error"
          });
        } else {
          this.formTraductor.reset();
          this.formTraductor.get('oracionTraducida')?.setValue(r.traduccion);
        }
       
      });
    } else if (this.TDT=="yoreme") {
      this.tradPrincService
      .postTraduccionYE(this.formTraductor.value.oracionTraductora)
      .subscribe((r) => {
        console.log(r);
        this.formTraductor.get('oracionTraducida')?.setValue(r.traduccion);
      });
    }
   
  }

  canvTrad(){
    if (this.TDT == 'español') {
      this.TDT = 'yoreme';
    
    
    } else if (this.TDT == 'yoreme') {
      this.TDT = 'español';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public formGrupo: FormGroup;
  private paciente: any;
  constructor() {
  }
  public inicializar(): void {
    try {
      const typeDefault = this.formGrupo && this.formGrupo.controls && this.formGrupo.controls.idPatientType ?
        this.formGrupo.controls.idPatientType.value : 'C';
      this.formGrupo = new FormGroup({
        idUserTitular: new FormControl(this.paciente.identification),
        idPatient: new FormControl(''),
        insuranceIdentification: new FormControl(''),
        idPatientType: new FormControl(typeDefault),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        birthDate: new FormControl('', Validators.required),
        birthDateFAKE: new FormControl('', Validators.required),
        relatives: new FormControl('', [Validators.required]),
        particular: new FormControl(true),
        producto: new FormControl(null),
        planMedico: new FormControl(null),
        codigoPlan: new FormControl(null),
        relative: new FormControl(true),
      });
    } catch (e) {

    }
  }
  public guardar(): void {}
  ngOnInit() {
    this.inicializar();

  }
  /*
    gets and sets
     */
  setIdentification(identification: any) {
    this.f.identification.patchValue(identification);
    this.f.identification.markAsTouched();
  }

  setIdentificationType(identificationType: any) {
    this.f.identificationType.patchValue(identificationType);
    this.f.identificationType.markAsTouched();
  }

  setIdentification2(identification: any) {
    this.f.identification2.patchValue(identification);
    this.f.identification2.markAsTouched();
  }

  setIdentificationTypeDep(identificationType: any) {
    this.f.identificationTypeDep.patchValue(identificationType);
    this.f.identificationTypeDep.markAsTouched();
  }

  setAsegurado(asegurado: any) {
    this.f.asegurado.patchValue(asegurado);
    this.f.asegurado.markAsTouched();
  }

  setTipoAsegurado(tipoAsegurado: any) {
    this.f.tipoAsegurado.patchValue(tipoAsegurado);
    this.f.tipoAsegurado.markAsTouched();
  }

  setInsuranceIdentification(insuranceIdentification: any) {
    this.f.insuranceIdentification.patchValue(insuranceIdentification);
    this.f.insuranceIdentification.markAsTouched();
  }

  setFirstName(firstName: any) {
    this.f.firstName.patchValue(firstName);
    this.f.firstName.markAsTouched();
  }

  setLastName(lastName: any) {
    this.f.lastName.patchValue(lastName);
    this.f.lastName.markAsTouched();
  }

  setBirthDate(birthDate: any) {
    this.f.birthDate.patchValue(birthDate);
    this.f.birthDate.markAsTouched();
  }

  setBirthDateFake(birthDateFake: any) {
    this.f.birthDateFAKE.patchValue(birthDateFake);
    this.f.birthDateFAKE.markAsTouched();
  }

  setGender(gender: any) {
    this.f.gender.patchValue(gender);
    this.f.gender.markAsTouched();
  }

  setEmail(email: any) {
    this.f.email.patchValue(email);
    this.f.email.markAsTouched();
  }

  setEmail2(email: any) {
    this.f.email2.patchValue(email);
    this.f.email2.markAsTouched();
  }

  setClientTypeMultiple(clientTypeMultiple: any) {
    this.f.clientTypeMultiple.patchValue(clientTypeMultiple);
    this.f.clientTypeMultiple.markAsTouched();
  }

  setIsDependiente(isDependiente: any) {
    this.f.isDependiente.patchValue(isDependiente);
    this.f.isDependiente.markAsTouched();
  }

  get f() {
    return this.formGrupo.controls;
  }
}

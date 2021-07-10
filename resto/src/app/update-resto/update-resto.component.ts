import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  editResto= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private router:ActivatedRoute, private resto:RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn(result)
      this.editResto= new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
      })
    })
  }
  collection()
  {
    console.warn("item",this.editResto.value)
  }

}

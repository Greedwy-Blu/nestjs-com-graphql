import { InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail } from "class-validator";

@InputType()
export class CreateUserInput{
    
   @IsString()
   @IsNotEmpty({message: 'Este campo não pode ser vazia'})
    name: string;
    
    @IsEmail()
    @IsNotEmpty({message: 'Este campo não pode ser vazia'})
    email: string;



}
import { Injectable } from '@nestjs/common';
import { bookDTO } from '../book.dto';
import { PrismaService } from 'src/database/Prisma.Service';
import { error } from 'console';

@Injectable()
export class BookService {
    delete(id: string) {
      throw new Error('Method not implemented.');
    }
    constructor(private prisma:PrismaService){

    }
    async create(data: bookDTO){

  const bookExists = await this.prisma.book.findFirst({
    where: {
        bar_code: data.bar_code
    }
  })

  if(bookExists){
    throw new Error("o livro já existe")
  }
        
 const book = await this.prisma.book.create({
            data,
        })

        return book;

    }

    async findAll(){
      return this.prisma.book.findMany()
    }


    async update(id: string, data: bookDTO) {
      const bookExists = await this.prisma.book.findUnique({
        where: {
          id: id,
        },
      });
    
      if (!bookExists) {
        throw new Error("Book não existe");
      }
    
      await this.prisma.book.update({
        data,
        where: {
          id: id,
        },
      });

      async delete(:id string){
        const bookExists = await this.prisma.book.findUnique({
          where: {
            id: id,
          },
        });
      
        if (!bookExists) {
          throw new Error("Book não existe");
        }
      
    return await this.prisma.book.delete({
          where: {
            id: id,
          },
        });
  
    
    }
    
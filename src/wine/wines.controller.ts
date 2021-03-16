import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    UseFilters,
    UsePipes,
    CacheKey,
    CacheTTL,
    UseInterceptors,
    CacheInterceptor,
} from '@nestjs/common';
import { WineService } from './wines.service';
import { WineDTO } from './dtos/wine.dto';
import { Wine } from './interfaces/wine.interface';
import { ValidationPipe } from '../pipes/validation.pipe';
import { BenchMarkInterceptor } from '../interceptors/benchmark.interceptor';
// import {HttpExceptionFilter} from '../filters/http-exception.filter'

@Controller('wines')
@UseInterceptors(CacheInterceptor, BenchMarkInterceptor)
export class WineController {
    constructor(private readonly wineService: WineService) { }

    @Get()
    @CacheKey('allWines')
    @CacheTTL(1)
    // @UseFilters(HttpExceptionFilter)
    findAll(): Promise<Wine[]> {
        return this.wineService.findAll();
    }

    @Get(':id')
    findSingle(@Param() params): Promise<Wine> {
        return this.wineService.findSingle(params.id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() wine: WineDTO): Promise<Wine> {
        return this.wineService.create(wine);
    }

    @Put(':id')
    update(@Param('id') id, @Body() wine: WineDTO): Promise<Wine> {
        return this.wineService.update(id, wine);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Wine> {
        return this.wineService.delete(id);
    }
}

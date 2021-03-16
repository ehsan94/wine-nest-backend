import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WineDTO {
    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Deutschland',
        description: 'Name of the country wine came from',
    })
    readonly country: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '2018',
        description: 'year',
    })
    readonly vintage: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Mosel',
    })
    readonly region: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Morstein',
    })
    readonly lage: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'leiblich',
    })
    readonly sweetness: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '18%',
    })
    readonly sugarLevel: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Stillwein',
    })
    readonly wineType: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'white',
    })
    readonly wineColor: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Doppio passo',
    })
    readonly title: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'This wine is ...',
    })
    readonly description: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '12%',
    })
    readonly alcoholLevel: string;

    @IsBoolean()
    @IsOptional()
    @ApiProperty({
        example: true,
    })
    readonly validEan: boolean;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: '5%',
    })
    readonly acidity: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Weinabu Gallhofer',
    })
    readonly winery: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Riseling',
    })
    readonly grape: string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        example: 'Chianti',
    })
    readonly appellation: string;
}
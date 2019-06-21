import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export default function(app){
    const options = new DocumentBuilder()
    .setTitle(process.env.APP_NAME)
    .setDescription(process.env.APP_DESC)
    .setVersion('1.0')
    .setHost(process.env.DOMAIN)
    .build();
   
    const document = SwaggerModule.createDocument(app, options);
   
    SwaggerModule.setup('api', app, document);
}

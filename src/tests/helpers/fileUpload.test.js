import cloudinary from 'cloudinary'

import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
    cloud_name: 'dlwi9zyyq', 
    api_key: '664981641947331', 
    api_secret: 'uJtN7kgcI4aTIjyfp7dzQgnzoXw' 
  });

jest.setTimeout(10000);

describe('Pruebas en fileUpload', () => {

    test('debe de cargar un archivo y retornar el URL', async (  ) => {

        // const resp = await fetch('https://i.redd.it/7nvpw823rpx11.jpg');
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([ blob ], 'foto.png' );
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        // image id
        const segments = url.split('/')
        const imgId = segments[ segments.length - 1].replace('.png', '');

        await cloudinary.v2.api.delete_resources(imgId , {}, () => { 
            // console.log(' deleted ') 
        });
        
    })
    
    test('debe de retornar un error', async () => {
        
        const file = new File([ ], 'foto.png' );

        const url = await fileUpload( file );

        expect( url ).toBe(null);
        
    })
    
})

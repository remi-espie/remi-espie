import { Typography } from '@suid/material'

function Loremipsum(props: { color: string }) {
    return (
        <Typography
            variant="body1"
            sx={{ textAlign: 'center' }}
            color={props.color}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id mi
            pulvinar ex pretium convallis. Etiam quam libero, elementum ac
            blandit vel, rutrum sit amet leo. Integer gravida, lacus eu
            tincidunt suscipit, massa augue iaculis felis, non ullamcorper purus
            ex sit amet sapien. Integer pellentesque libero in metus
            sollicitudin rutrum. Nam vel purus eu dui tempor sollicitudin.
            Vivamus eu dui lobortis ante eleifend porta. Nulla eu metus elit.
            Suspendisse tempor est nec tellus elementum faucibus. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed auctor hendrerit erat id imperdiet. Vestibulum
            pulvinar risus dolor, nec maximus libero scelerisque nec. Duis
            accumsan molestie rhoncus. Proin tristique sem sapien, nec blandit
            odio consectetur auctor. Fusce velit magna, dignissim eget lectus
            sed, tristique bibendum ante. Praesent nisl elit, lacinia consequat
            lacus sit amet, scelerisque aliquet nisi. Proin ligula diam,
            facilisis vitae pharetra quis, molestie at justo. Nullam urna diam,
            facilisis ut fringilla id, mattis eu erat. Aenean suscipit ex eget
            sapien venenatis pretium. Cras ac leo commodo, vehicula velit sed,
            iaculis enim. Ut at consequat tortor. Nullam a fermentum orci.
            Curabitur imperdiet mauris lobortis lectus imperdiet, vitae
            dignissim sem iaculis. Donec non porttitor dui, vitae tempus magna.
            Curabitur eget semper elit. Aenean dolor odio, accumsan et malesuada
            non, ultricies sed urna. Mauris pulvinar diam quis leo feugiat
            tempus. Morbi sit amet fringilla ex. Cras vitae rutrum sapien. Fusce
            molestie scelerisque diam at efficitur. Pellentesque mauris neque,
            fringilla eu lorem id, sodales vehicula eros. Etiam lobortis gravida
            rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis ante nibh, sagittis at odio ac, euismod dignissim metus. Sed
            rutrum risus et sem aliquet condimentum. Vestibulum et eleifend
            neque. Praesent sit amet quam metus. Nunc venenatis consequat
            dignissim. Sed vulputate vehicula mi ac tincidunt. Phasellus ac
            sapien fermentum, auctor nulla luctus, tincidunt sapien. Ut mauris
            erat, posuere nec commodo in, laoreet non diam. Nulla in eros
            sapien. Nulla facilisi.
        </Typography>
    )
}

export default Loremipsum

import {
  Heading as ChakraHeading,
  useStyleConfig,
  HeadingProps
} from '@chakra-ui/react'

const Heading = ({ variant, children, ...rest }: HeadingProps) => {
  const styles = useStyleConfig('Heading', { variant })

  return (
    <ChakraHeading as="h2" __css={styles} {...rest}>
      {children}
    </ChakraHeading>
  )
}

export default Heading

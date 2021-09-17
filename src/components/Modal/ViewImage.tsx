import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onEsc={onClose} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="pGray.800" maxHeight="800px" maxWidth="900px">
        <ModalBody>
          <Image src={imgUrl} alt="Imagem" maxHeight="600px" maxWidth="900px" />
        </ModalBody>

        <ModalFooter justifyContent="flex-start">
          <Link href={imgUrl} alt="Link" target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

import useRegisterModal from '@/hooks/useRegisterModal'
import React, { useCallback, useState } from 'react'
import Input from '../Input';
import Modal from '../Modal';
import useLoginModal from '@/hooks/useLoginModal';

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(
      () => {
        if (isLoading) {
            return;
        }

        registerModal.onClose();
        loginModal.onOpen();
      },
      [isLoading, registerModal, loginModal],
    )
    
    const onSubmit = useCallback(
      async () => {
        try {
            setIsLoading(true);
            //todo: Add register and log in

            registerModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
      },
      [registerModal],
    )

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an account?</p>
            <span onClick={onToggle}
                className="
                    text-white 
                    cursor-pointer 
                    hover:underline">Sign in</span>
        </div>
    )

  return (
    <Modal 
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
        onSubmit={onSubmit}
        title="Create an account"
        body={bodyContent}
        actionLabel="Register"
        disabled={isLoading}
        footer={footerContent}
    />
  )
}

export default RegisterModal
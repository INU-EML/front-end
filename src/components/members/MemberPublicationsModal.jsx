import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { theme, breakpoints } from '../../styles/GlobalStyles';
import MemberPublicationCard from './MemberPublicationCard';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  padding: 2rem 1rem;
  animation: fadeIn 0.2s ease-out;
  overflow-y: auto;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem 1rem;
    align-items: center;
  }
`;

const ModalContent = styled.div`
  background: ${theme.white};
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 700px;
  margin-top: 4rem;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
    margin-top: 0;
    border-radius: 12px;
    max-height: 90vh;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${theme.border};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.05), rgba(0, 168, 255, 0.05));

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.darkBlue};
  margin: 0 0 0.5rem 0;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

const PublicationCount = styled.p`
  font-size: 0.95rem;
  color: ${theme.textLight};
  margin: 0;

  strong {
    color: ${theme.primary};
    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${theme.textLight};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: ${theme.lightGray};
    color: ${theme.text};
  }

  &:focus {
    outline: 2px solid ${theme.primary};
    outline-offset: 2px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 36px;
    height: 36px;
    font-size: 1.3rem;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  overflow-y: auto;
  flex: 1;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.border};
    border-radius: 4px;

    &:hover {
      background: ${theme.textLight};
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: ${theme.textLight};

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  p {
    font-size: 1.1rem;
    margin: 1rem 0 0 0;
  }

  .subtitle {
    font-size: 0.95rem;
    margin-top: 0.5rem;
    color: ${theme.gray};
  }
`;

/**
 * MemberPublicationsModal Component
 *
 * Displays a modal with publications authored by a member
 *
 * Props:
 * - member: Member object with name
 * - publications: Array of publication objects
 * - onClose: Callback function when modal should close
 */
const MemberPublicationsModal = ({ member, publications = [], onClose }) => {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    // Store the previously focused element
    previousFocusRef.current = document.activeElement;

    // Focus the close button when modal opens
    const closeButton = modalRef.current?.querySelector('button');
    if (closeButton) {
      closeButton.focus();
    }

    // Handle ESC key press
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';

      // Restore focus to previously focused element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, []);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    // Close only if clicking directly on overlay, not on modal content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!member) {
    return null;
  }

  const publicationCount = publications.length;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent ref={modalRef}>
        <ModalHeader>
          <HeaderContent>
            <ModalTitle>Publications by {member.name}</ModalTitle>
            <PublicationCount>
              <strong>{publicationCount}</strong> publication{publicationCount !== 1 ? 's' : ''}
            </PublicationCount>
          </HeaderContent>
          <CloseButton
            onClick={handleClose}
            aria-label="Close modal"
            title="Close (ESC)"
          >
            ✕
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {publicationCount > 0 ? (
            publications.map((publication) => (
              <MemberPublicationCard
                key={publication.id}
                publication={publication}
              />
            ))
          ) : (
            <EmptyState>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8A2.5 2.5 0 0 1 14 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 1 13.5v-11zm2 0a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-8z" />
                <path d="M4 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <p>No publications found</p>
              <p className="subtitle">
                This member doesn&apos;t have any publications in the database yet.
              </p>
            </EmptyState>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MemberPublicationsModal;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import * as S from './styled';
import { Container } from '../../ui/styled';

export default function Header() {
  const router = useRouter();
  const home = router.pathname === '/';
  const addItems = router.pathname === '/add-items';
  const user = router.pathname === '/user';
  return (
    <S.Header>
      <Container>
        <div className="header__user-profile">
          <Image
            src={'/images/search-icon.svg'}
            layout="fill"
            alt="Test Image"
          />
        </div>
        <input type="search" className="header__search" placeholder="search" />
        <Link href="/">
          <a className={cx({ active: home })}>Items</a>
        </Link>
        <Link href="/add-items">
          <a className={cx({ active: addItems })}>Add items</a>
        </Link>
        <Link href="/user">
          <a className={cx({ active: user })}>Profile</a>
        </Link>
      </Container>
    </S.Header>
  );
}

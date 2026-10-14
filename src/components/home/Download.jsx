import { Check } from 'lucide-react';
import StoreButton from '../StoreButton';
import BrandMark from '../BrandMark';
import PhoneMock from './PhoneMock';

export default function Download() {
  return (
    <section className="sec dl" id="download">
      <div className="wrap">
        <div className="dl__card rv">
          <div className="dl__copy">
            <BrandMark size={64} />
            <h2 className="h-section">Your next move is one tap away.</h2>
            <ul>
              <li><Check size={18} /> Login with your mobile number — no passwords</li>
              <li><Check size={18} /> Save Home &amp; Shop addresses for one-tap repeat bookings</li>
              <li><Check size={18} /> Free to download, pay only per trip</li>
            </ul>
            <div className="dl__btns">
              <div className="dl__app"><span>For customers</span><StoreButton app="customer" /></div>
              <div className="dl__app"><span>For drivers</span><StoreButton app="partner" /></div>
            </div>
          </div>
          <div className="dl__phone" aria-hidden="true">
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
}
